import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme;
  currentPage: number;
  numberOfPages: number;
  hidesForSinglePage?: boolean;
  pageIndicatorTintColor?: string;
  currentPageIndicatorTintColor?: string;
  updateCurrentPageDisplay?: (number: number) => void;
  size?: number;
};

const DEFAULT_SIZE = 8;

class PageControl extends React.Component<Props> {
  dot = {
    width: this.props.size || DEFAULT_SIZE,
    height: this.props.size || DEFAULT_SIZE,
    borderRadius: this.props.size || DEFAULT_SIZE,
    margin: (this.props.size || DEFAULT_SIZE) / 2,
  };
  activeDot = {
    backgroundColor:
      this.props.currentPageIndicatorTintColor || this.props.theme.barColor,
  };
  inactiveDot = {
    backgroundColor:
      this.props.pageIndicatorTintColor || this.props.theme.dividerColor,
  };
  dotWrapper = {
    width: (this.props.size || DEFAULT_SIZE) * 2,
    height: (this.props.size || DEFAULT_SIZE) * 2,
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

    return (
      <View style={styles.row}>
        {[...Array(numberOfPages).keys()].map(idx => (
          <TouchableWithoutFeedback
            key={`pageControlDot_${idx}`}
            onPress={() => this.updateCurrentPage(idx)}
          >
            <View style={[styles.dotWrapper, this.dotWrapper]}>
              <View
                style={[
                  this.dot,
                  idx === currentPage ? this.activeDot : this.inactiveDot,
                ]}
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
  dotWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
