/* @flow */
import * as React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

import PageControl from './PageControl';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const { width } = Dimensions.get('window');

type Props = {
  theme: Theme,
  children: React.Node,
  containerStyle?: ViewStyleProp,
  startPage?: number,
  onPageChange?: number => void,
  currentPageIndicatorTintColor?: string,
  pageIndicatorTintColor?: string,
  pageIndicatorSize?: number,
};

type State = {
  currentPage: number,
};

class PageControlView extends React.Component<Props, State> {
  state = {
    currentPage: this.props.startPage || 0,
  };

  componentDidMount() {
    if (this.props.startPage) this.scrollToPage(this.props.startPage);
  }

  scrollView = undefined;

  handleScroll = event => {
    const xOffset = event.nativeEvent.contentOffset.x + 10;
    const currentPage = Math.floor(xOffset / width);
    this.setState({ currentPage });
  };

  handleScrollEnd = event => {
    const { onPageChange } = this.props;
    const xOffset = event.nativeEvent.contentOffset.x + 10;
    const currentPage = Math.floor(xOffset / width);
    if (this.state.currentPage === currentPage) {
      if (onPageChange && typeof onPageChange === 'function')
        onPageChange(this.state.currentPage);
    }
  };

  scrollToPage = (pageNumber: number): void => {
    if (this.scrollView) this.scrollView.scrollTo({ x: width * pageNumber });
  };

  render() {
    const {
      containerStyle,
      children,
      pageIndicatorSize,
      pageIndicatorTintColor,
      currentPageIndicatorTintColor,
    } = this.props;
    const numberOfPages = React.Children.count(children);
    return (
      <View style={[styles.container, containerStyle]}>
        <ScrollView
          ref={ref => {
            this.scrollView = ref;
          }}
          automaticallyAdjustContentInsets={false}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          directionalLockEnabled
          onScroll={this.handleScroll}
          onMomentumScrollEnd={this.handleScrollEnd}
        >
          {React.Children.map(children, child => (
            <View style={styles.pageStyle}>{child}</View>
          ))}
        </ScrollView>
        <View style={styles.controlsContainer}>
          <PageControl
            numberOfPages={numberOfPages}
            currentPage={this.state.currentPage}
            updateCurrentPageDisplay={this.scrollToPage}
            currentPageIndicatorTintColor={currentPageIndicatorTintColor}
            pageIndicatorTintColor={pageIndicatorTintColor}
            size={pageIndicatorSize}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(PageControlView);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  pageStyle: {
    width,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
});
