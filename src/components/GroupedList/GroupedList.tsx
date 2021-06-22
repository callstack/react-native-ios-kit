import * as React from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import Sections from './Sections';
import { withTheme } from '../../core/theming';
import { Headline } from '../Typography';

import type { ViewStyle, StyleProp } from 'react-native';
import type { Theme } from '../../types/Theme';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

type Item = {
  key: number;
  name: string;
  group: string;
};

type Props = {
  theme: Theme;
  items: Array<Item>;
  groupBy: (item: Item) => string;
  renderItem: (data: { item: any; index: number }) => React.ReactElement | null;
  renderSectionHeader?: (data: { section: any }) => React.ReactElement | null;
  renderSectionFooter?: (data: { section: any }) => React.ReactElement | null;
  ItemSeparatorComponent?: React.ComponentType<any>;
  SectionSeparatorComponent: any;
  sections?: Array<string>;
  sectionsStyle?: StyleProp<ViewStyle>;
  sectionPrimaryColor?: string;
  getItemLayout?: (
    data: any,
    index: number
  ) => { length: number; offset: number; index: number };
  stickySectionHeadersEnabled?: boolean;
  keyExtractor?: (item: Item) => string;
};

type State = {
  dataSource?: Object;
};

class GroupedList extends React.PureComponent<Props, State> {
  sectionList = React.createRef<SectionList>();
  sectionHeadersHeights: { [key: string]: number } = {};

  groupItems(items: Array<Item>): any {
    const grouped = items.reduce((acc, item) => {
      const groupId = this.props.groupBy(item);
      if (Object.prototype.hasOwnProperty.call(acc, groupId)) {
        // @ts-ignore
        acc[groupId].data.push(item);
      } else {
        // @ts-ignore
        acc[groupId] = { title: groupId, data: [item] };
      }
      return acc;
    }, {});

    return Object.values(grouped);
  }

  handleSectionPress = (sectionIdx: number) => {
    const sections = this.props.sections || alphabet;

    const { index } = sections.reduce(
      // @ts-ignore
      (acc, item, currendIndex) => {
        const newDelta = Math.abs(sectionIdx - currendIndex);
        if (newDelta < acc.delta) {
          return { delta: newDelta, index: currendIndex };
        }
        return acc;
      },
      { delta: sections.length, index: 0 }
    );

    if (this.sectionList.current) {
      this.sectionList.current.scrollToLocation({
        viewOffset:
          this.props.stickySectionHeadersEnabled !== false
            ? this.sectionHeadersHeights[sections[index]]
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
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => this.handleSectionHeaderLayout(height, data)}
        >
          {this.props.renderSectionHeader(data)}
        </View>
      );
    }

    return (
      <View
        style={[styles.header, { backgroundColor: this.props.theme.barColor }]}
        onLayout={({
          nativeEvent: {
            layout: { height },
          },
        }) => this.handleSectionHeaderLayout(height, data)}
      >
        <Headline>
          {data.section &&
            typeof data.section === 'object' &&
            data.section.title}
        </Headline>
      </View>
    );
  };

  handleSectionHeaderLayout = (height: number, data: any) => {
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
      items,
      renderItem,
      renderSectionFooter,
      stickySectionHeadersEnabled,
      keyExtractor,
    } = this.props;

    const deafultKeyExtractor = (item: any) => item.key || item.id;

    const Separator = () => (
      <View
        style={[
          styles.separator,
          { backgroundColor: this.props.theme.barColor },
        ]}
      />
    );

    return (
      <View style={styles.container}>
        <SectionList
          initialNumToRender={getItemLayout ? 30 : Number.MAX_SAFE_INTEGER}
          ref={this.sectionList}
          renderItem={renderItem}
          renderSectionFooter={renderSectionFooter}
          renderSectionHeader={this.renderSectionHeader}
          ItemSeparatorComponent={ItemSeparatorComponent || Separator}
          SectionSeparatorComponent={SectionSeparatorComponent}
          sections={this.groupItems(items)}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  header: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  separator: {
    height: 1,
    marginLeft: 15,
  },
});

export default withTheme(GroupedList);
