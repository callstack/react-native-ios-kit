/* @flow */
import * as React from 'react';
import {
  Dimensions,
  SectionList,
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';

import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const { width } = Dimensions.get('window');

type Data = Array<{
  data: Array<*>,
  title: string,
}>;
type Props = {
  theme: Theme,
  numberOfColumns?: number,
  data: Data,
  renderItem: (item: *) => ?React.Element<*>,
  renderSectionHeader?: (info: { section: * }) => ?React.Element<*>,
  renderSectionFooter?: (info: { section: * }) => ?React.Element<*>,
  keyExtractor?: (item: *, index: number) => string,
  onEndReached?: (info: { distanceFromEnd: number }) => void,
  onEndReachedThreshold?: number,
  onRefresh?: () => void,
  refreshing: boolean,
  stickySectionHeadersEnabled?: boolean,
  listStyle?: ViewStyleProp,
  contentContainerStyle?: ViewStyleProp,
};

class Collection extends React.Component<Props> {
  static defaultProps = {
    keyExtractor: (item: *, index: number) => `${item.key}` || `${index}`,
    numberOfColumns: 4,
    refreshing: false,
  };
  constructor(props: Props) {
    super(props);
    this.styles = getStyles(props);
  }

  styles: Object;

  renderCell = ({ item }: { item: * }) => {
    const child = this.props.renderItem(item);
    if (!child) return null;
    return React.cloneElement(child, {
      style: StyleSheet.flatten([child.props.style, this.styles.item]),
    });
  };

  renderRow = ({ item }: { item: * }) => (
    <FlatList
      style={this.styles.wrapper}
      numColumns={this.props.numberOfColumns}
      renderItem={this.renderCell}
      data={item}
      keyExtractor={this.props.keyExtractor}
    />
  );

  genListSection = (data: Data) =>
    // $FlowFixMe
    data.map(item => ({ ...item, data: [item.data] }));

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
