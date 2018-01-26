/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, SectionList } from 'react-native';

import Sections from './Sections';
import withTheme from '../../core/withTheme';
import { Headline } from '../Typography';

import type { Theme } from '../../types/Theme';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');

type Props = {
  theme: Theme,
  items: Array<any>,
  groupBy: Function,
  renderItem: any, // FIXME: add better type
  renderSectionHeader?: Function,
  renderFooter?: Function,
  sections?: Array<string>,
  sectionsStyle?: any,
  sectionPrimaryColor?: string,
  getItemLayout?: Function,
};

type State = {
  dataSource?: Object,
};

// const ItemSeparatorComponent = () => (
//   <View style={this._styles.separator} />
// );

class GroupedList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this._styles = getStyles(this.props.theme);
  }

  _styles: Object;
  _sectionList = undefined;

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

    if (this._sectionList) {
      this._sectionList.scrollToLocation({
        sectionIndex: index,
        itemIndex: 0,
        animated: false,
      });
    }
  };

  renderSectionHeader = data => {
    if (this.props.renderSectionHeader) {
      return this.props.renderSectionHeader(data);
    }

    return (
      <View style={this._styles.header}>
        <Headline>{data.section.title}</Headline>
      </View>
    );
  };

  // renderSeparator = (sectionId, rowId) => (
  //   <View style={this._styles.separator} key={`${sectionId}-${rowId}`} />
  // );

  render() {
    const {
      sections,
      sectionsStyle,
      sectionPrimaryColor,
      getItemLayout,
    } = this.props;
    return (
      <View style={this._styles.container}>
        <SectionList
          initialNumToRender={getItemLayout ? 30 : Number.MAX_SAFE_INTEGER}
          ref={sectionList => (this._sectionList = sectionList)}
          renderItem={this.props.renderItem}
          renderFooter={this.props.renderFooter}
          renderSectionHeader={this.renderSectionHeader}
          // renderSeparator={this.renderSeparator}
          // ItemSeparatorComponent={ItemSeparatorComponent}
          sections={this.groupItems(this.props.items)}
          stickySectionHeadersEnabled
          automaticallyAdjustContentInsets={false}
          getItemLayout={getItemLayout}
        />
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
      flex: 1,
      width: 200,
    },
  });

export default withTheme(GroupedList);
