/* @flow */
import * as React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  currentPage: number,
  numberOfPages: number,
  hidesForSinglePage?: boolean,
  pageIndicatorTintColor?: string,
  currentPageIndicatorTintColor?: string,
  updateCurrentPageDisplay: number => void,
  size?: number,
};

const DEFAULT_SIZE = 8;

class PageControl extends React.Component<Props> {
  makeDotStyles = () => {
    const { theme, size = DEFAULT_SIZE } = this.props;
    const currentPageIndicatorTintColor =
      this.props.currentPageIndicatorTintColor || theme.barColor;
    const pageIndicatorTintColor =
      this.props.pageIndicatorTintColor || theme.dividerColor;
    return StyleSheet.create({
      dot: {
        width: size,
        height: size,
        borderRadius: size,
        margin: size / 2,
      },
      activeDot: {
        backgroundColor: currentPageIndicatorTintColor,
      },
      inactiveDot: {
        backgroundColor: pageIndicatorTintColor,
      },
      dotWrapper: {
        width: size * 2,
        height: size * 2,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });
  };

  updateCurrentPage = (idx: number) => {
    const { currentPage, updateCurrentPageDisplay, numberOfPages } = this.props;
    if (
      !updateCurrentPageDisplay ||
      typeof updateCurrentPageDisplay !== 'function'
    )
      return;
    if (idx > currentPage && currentPage + 1 <= numberOfPages)
      updateCurrentPageDisplay(currentPage + 1);
    else if (idx < currentPage && currentPage > 0)
      updateCurrentPageDisplay(currentPage - 1);
  };

  render() {
    const { numberOfPages, currentPage, hidesForSinglePage } = this.props;
    if (hidesForSinglePage && numberOfPages === 1) return null;
    const { dot, activeDot, inactiveDot, dotWrapper } = this.makeDotStyles();
    return (
      <View style={styles.row}>
        {[...Array(numberOfPages).keys()].map(idx => (
          <TouchableWithoutFeedback
            key={`pageControlDot_${idx}`}
            onPress={() => this.updateCurrentPage(idx)}
          >
            <View style={dotWrapper}>
              <View
                style={
                  idx === currentPage ? [dot, activeDot] : [dot, inactiveDot]
                }
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

export default withTheme(PageControl);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 5,
  },
});
