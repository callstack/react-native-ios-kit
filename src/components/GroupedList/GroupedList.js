/* @flow */

import * as React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import Sections from './Sections';
import withTheme from '../../core/withTheme';
import { Headline } from '../Typography';

import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type { Theme } from '../../types/Theme';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

type GroupedItems = Array<{ title: string, data: Array<any> }>;

type Props = {
  theme: Theme,
  items: Array<any>,
  groupBy: (item: any) => string,
  renderItem: (data: { item: *, index: number }) => ?React.Element<*>,
  renderSectionHeader?: (data: {
    section: any,
  }) => ?React.Element<*>,
  renderSectionFooter?: (data: {
    section: any,
  }) => ?React.Element<*>,
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
  keyExtractor?: (item: *) => string,
};

type State = {
  groupedItems: GroupedItems,
};

class GroupedList extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.styles = getStyles(props.theme);
    this.state = {
      groupedItems: this.groupItems(props.items, props.groupBy),
    };
  }

  componentWillReceiveProps(props, nextProps) {
    if (props.items !== nextProps.items) {
      this.setState({
        groupedItems: this.groupItems(nextProps.items, nextProps.groupBy),
      });
    }
  }

  styles: Object;
  sectionList: ?Object = undefined;
  sectionHeadersHeights: { [key: string]: number } = {};

  groupItems(
    items: Array<Object>,
    groupBy: (item: any) => string
  ): GroupedItems {
    const grouped = items.reduce((acc, item) => {
      const groupId = groupBy(item);
      if (Object.prototype.hasOwnProperty.call(acc, groupId)) {
        acc[groupId].data.push(item);
      } else {
        acc[groupId] = { title: groupId, data: [item] };
      }
      return acc;
    }, {});

    return Object.values(grouped);
  }

  handleSectionPress = (sectionIdx: number) => {
    const sections = this.props.sections || alphabet;

    const { index } = this.state.groupedItems.reduce(
      (acc, item, currendIndex) => {
        const indexInSections = sections.indexOf(item.title);
        const newDelta = Math.abs(sectionIdx - indexInSections);
        if (newDelta < acc.delta) {
          return { delta: newDelta, index: currendIndex };
        }
        return acc;
      },
      { delta: sections.length, index: 0 }
    );

    if (this.sectionList) {
      this.sectionList.scrollToLocation({
        viewOffset:
          this.props.stickySectionHeadersEnabled !== false
            ? this.sectionHeadersHeights[this.state.groupedItems[index].title]
            : 0,
        sectionIndex: index,
        itemIndex: 0,
        animated: false,
      });
    }
  };

  renderSectionHeader = (data: { section: any }) => {
    if (this.props.renderSectionHeader) {
      return (
        <View
          onLayout={({ nativeEvent: { layout: { height } } }) =>
            this.handleSectionHeaderLayout(height, data)
          }
        >
          {this.props.renderSectionHeader(data)}
        </View>
      );
    }

    return (
      <View
        style={this.styles.header}
        onLayout={({ nativeEvent: { layout: { height } } }) =>
          this.handleSectionHeaderLayout(height, data)
        }
      >
        <Headline>
          {data.section &&
            typeof data.section === 'object' &&
            data.section.title}
        </Headline>
      </View>
    );
  };

  handleSectionHeaderLayout = (height: number, data: Object) => {
    this.sectionHeadersHeights[data.section.title] = height;
  };

  render() {
    const {
      sections,
      sectionsStyle,
      sectionPrimaryColor,
      getItemLayout,
      ItemSeparatorComponent,
      SectionSeparatorComponent,
      renderItem,
      renderSectionFooter,
      stickySectionHeadersEnabled,
      keyExtractor,
    } = this.props;

    const deafultKeyExtractor = item => item.key || item.id;

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
          sections={this.state.groupedItems}
          automaticallyAdjustContentInsets={false}
          getItemLayout={getItemLayout}
          stickySectionHeadersEnabled={stickySectionHeadersEnabled}
          keyExtractor={keyExtractor || deafultKeyExtractor}
        />
        <Sections
          onSectionPress={this.handleSectionPress}
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
      flexGrow: 1,
      height: '100%',
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
