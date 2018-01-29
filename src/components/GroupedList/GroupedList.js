/* @flow */

import * as React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import Sections from './Sections';
import withTheme from '../../core/withTheme';
import { Headline } from '../Typography';

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { Theme } from '../../types/Theme';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

type Props = {
  theme: Theme,
  items: Array<any>,
  groupBy: (item: any) => string,
  renderItem: (data: { item: *, index: number }) => ?React.Element<*>,
  renderSectionHeader?: (data: {
    section: { title: string },
  }) => ?React.Element<*>,
  renderSectionFooter?: (data: {
    section: { title: string },
  }) => ?React.Element<*>,
  renderFooter?: () => ?React.Element<*>,
  ItemSeparatorComponent?: React.ComponentType<*>,
  SectionSeparatorComponent: *,
  sections?: Array<string>,
  sectionsStyle?: StyleObj,
  sectionPrimaryColor?: string,
  getItemLayout?: (
    data: any,
    index: number
  ) => { length: number, offset: number, index: number },
  stickySectionHeadersEnabled?: boolean,
};

type State = {
  dataSource?: Object,
};

class GroupedList extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.styles = getStyles(this.props.theme);
  }

  styles: Object;
  sectionList = undefined;

  groupItems(items: Array<Object>) {
    const groupped = items.reduce((acc, item) => {
      const groupId = this.props.groupBy(item);
      if (Object.prototype.hasOwnProperty.call(acc, groupId)) {
        acc[groupId].data.push(item);
      } else {
        acc[groupId] = { title: groupId, data: [item] };
      }
      return acc;
    }, {});

    return Object.values(groupped);
  }

  handleSectionPress = (sectionIdx: number) => {
    const sections = this.props.sections || alphabet;

    const { index } = sections.reduce(
      (acc, item, currendIndex) => {
        const newDelta = Math.abs(sectionIdx - currendIndex);
        if (newDelta < acc.delta) {
          return { delta: newDelta, index: currendIndex };
        }
        return acc;
      },
      { delta: sections.length, index: 0 }
    );

    if (this.sectionList) {
      this.sectionList.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: false,
      });
    }
  };

  renderSectionHeader = (data: { section: { title: string } }) => {
    if (this.props.renderSectionHeader) {
      return this.props.renderSectionHeader(data);
    }

    return (
      <View style={this.styles.header}>
        <Headline>{data.section.title}</Headline>
      </View>
    );
  };

  render() {
    const {
      sections,
      sectionsStyle,
      sectionPrimaryColor,
      getItemLayout,
      ItemSeparatorComponent,
      SectionSeparatorComponent,
      items,
      renderItem,
      renderFooter,
      renderSectionFooter,
      stickySectionHeadersEnabled,
    } = this.props;

    const Separator = () => <View style={this.styles.separator} />;

    return (
      <View style={this.styles.container}>
        <SectionList
          initialNumToRender={getItemLayout ? 30 : Number.MAX_SAFE_INTEGER}
          ref={sectionList => (this.sectionList = sectionList)}
          renderItem={renderItem}
          renderSectionFooter={renderSectionFooter}
          renderSectionHeader={this.renderSectionHeader}
          ItemSeparatorComponent={ItemSeparatorComponent || Separator}
          SectionSeparatorComponent={SectionSeparatorComponent}
          sections={this.groupItems(items)}
          automaticallyAdjustContentInsets={false}
          getItemLayout={getItemLayout}
          stickySectionHeadersEnabled={stickySectionHeadersEnabled}
        />
        {renderFooter && renderFooter()}
        <Sections
          onSectionSelct={this.handleSectionPress}
          items={sections || alphabet}
          style={sectionsStyle}
          sectionPrimaryColor={sectionPrimaryColor}
        />
      </View>
    );
  }
}

const getStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    header: {
      paddingVertical: 5,
      paddingHorizontal: 15,
      backgroundColor: theme.barColor,
    },
    headerText: {
      fontWeight: 'bold',
    },
    separator: {
      backgroundColor: theme.barColor,
      height: 1,
      marginLeft: 15,
    },
  });

export default withTheme(GroupedList);
