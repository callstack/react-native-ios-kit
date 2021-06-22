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
import type { ViewStyle, StyleProp } from 'react-native';

const { width } = Dimensions.get('window');

type Data = Array<{
  data: Array<any>;
  title: string;
}>;
type Props = {
  theme: Theme;
  numberOfColumns?: number;
  data: Data;
  renderItem: (item: any) => React.ReactElement<any> | null;
  renderSectionHeader?: (info: {
    section: any;
  }) => React.ReactElement<any> | null;
  renderSectionFooter?: (info: {
    section: any;
  }) => React.ReactElement<any> | null;
  keyExtractor?: (item: any, index: number) => string;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
  onEndReachedThreshold?: number;
  onRefresh?: () => void;
  refreshing: boolean;
  stickySectionHeadersEnabled?: boolean;
  listStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

class Collection extends React.Component<Props> {
  static defaultProps = {
    keyExtractor: (item: any, index: number) => `${item.key}` || `${index}`,
    numberOfColumns: 4,
    refreshing: false,
  };
  itemStyle = {
    height: width / (this.props.numberOfColumns || 4),
    width: width / (this.props.numberOfColumns || 4),
  };

  renderCell = ({ item }: { item: any }) => {
    const child = this.props.renderItem(item);
    if (!child) return null;
    return React.cloneElement(child, {
      style: StyleSheet.flatten([child.props.style, this.itemStyle]),
    });
  };

  renderRow = ({ item }: { item: any }) => (
    <FlatList
      style={styles.wrapper}
      numColumns={this.props.numberOfColumns}
      renderItem={this.renderCell}
      data={item}
      keyExtractor={this.props.keyExtractor}
    />
  );

  genListSection = (data: Data) =>
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
        style={listStyle}
        contentContainerStyle={contentContainerStyle}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.footnoteColor}
          />
        }
      />
    );
  }
}

export default withTheme(Collection);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
