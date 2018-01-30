/* @flow */
import * as React from 'react';
import {
  Dimensions,
  SectionList,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const { width } = Dimensions.get('window');

type Props = {
  theme: Theme,
  numberOfColumns?: number,
  data: Array<*>,
  renderItem: (item: *) => ?React.Element<*>,
  renderSectionHeader?: (info: { section: * }) => ?React.Element<*>,
  renderSectionFooter?: (info: { section: * }) => ?React.Element<*>,
  keyExtractor?: (item: *, index: number) => string,
  onEndReached: (info: { distanceFromEnd: number }) => void,
  onEndReachedThreshold?: number,
  onRefresh?: () => void,
  refreshing: boolean,
  stickySectionHeadersEnabled?: boolean,
  listStyle: StyleObj,
  contentContainerStyle: StyleObj,
};

class Collection extends React.Component<Props> {
  static defaultProps = {
    keyExtractor: (item, index) => `${item.key}` || `${index}`,
    numberOfColumns: 4,
    refreshing: false,
  };
  constructor(props) {
    super(props);
    this.styles = getStyles(props);
  }

  styles: Object;

  renderCell = ({ item }) => {
    const child = this.props.renderItem(item);
    if (!child) return null;
    return React.cloneElement(child, {
      style: StyleSheet.flatten([child.props.style, this.styles.item]),
    });
  };

  renderRow = ({ item }) => {
    return (
      <FlatList
        style={this.styles.wrapper}
        numColumns={this.props.numberOfColumns}
        renderItem={this.renderCell}
        data={item}
        keyExtractor={this.props.keyExtractor}
      />
    );
  };

  genListSection = data => data.map(item => ({ ...item, data: [item.data] }));

  render() {
    const {
      data,
      renderSectionHeader,
      renderSectionFooter,
      onEndReached,
      onRefresh,
      refreshing,
      stickySectionHeadersEnabled,
      onEndReachedThreshold,
      listStyle,
      contentContainerStyle,
      theme,
    } = this.props;
    const dataList = this.genListSection(data);
    return (
      <SectionList
        sections={dataList}
        renderItem={this.renderRow}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={item => `row_${item}`}
        automaticallyAdjustContentInsets={false}
        renderSectionFooter={renderSectionFooter}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
        stickySectionHeadersEnabled={stickySectionHeadersEnabled}
        listStyle={listStyle}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={theme.footnoteColor}
            />
          ) : null
        }
      />
    );
  }
}

export default withTheme(Collection);

const getStyles = (props: Props): Object => {
  const { numberOfColumns = 4 } = props;
  return StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    item: {
      height: width / numberOfColumns,
      width: width / numberOfColumns,
    },
  });
};
