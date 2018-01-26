/* @flow */
import * as React from 'react';
import { Dimensions, SectionList, StyleSheet, FlatList } from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const { width } = Dimensions.get('window');

type Props = {
  theme: Theme,
  numberOfColumns?: number,
  data: Array<*>,
  renderItem: (item: *) => React.Element<*>,
  renderSectionHeader?: (info: { section: * }) => React.Element<*>,
  renderSectionFooter?: (info: { section: * }) => React.Element<*>,
  keyExtractor?: (item: *, index: number) => string,
  onEndReached: (info: { distanceFromEnd: number }) => void,
  onEndReachedThreshold?: number,
  onRefresh?: () => void,
  refreshing?: boolean,
  stickySectionHeadersEnabled?: boolean,
};

class Collection extends React.Component<Props> {
  static defaultProps = {
    keyExtractor: (item, index) => `${item.key}` || `${index}`,
    numberOfColumns: 4,
  };
  constructor(props) {
    super(props);
    this.styles = getStyles(props);
  }

  styles: StyleObj;

  renderCell = ({ item }) => {
    // const styles = this.getStyles();
    const child = this.props.renderItem(item);
    return React.cloneElement(child, {
      //$FlowFixMe
      style: StyleSheet.flatten([child.props.style, this.styles.item]),
    });
  };

  renderRow = ({ item }) => {
    // const styles = this.getStyles();
    return (
      <FlatList
        //$FlowFixMe
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
        onRefresh={onRefresh}
        refreshing={refreshing}
        stickySectionHeadersEnabled={stickySectionHeadersEnabled}
      />
    );
  }
}

export default withTheme(Collection);

const getStyles = (props: Props): StyleObj => {
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
