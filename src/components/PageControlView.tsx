import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';

import PageControl from './PageControl';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { ViewStyle, StyleProp, NativeScrollEvent } from 'react-native';

const { width } = Dimensions.get('window');

type Props = {
  theme: Theme;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  startPage?: number;
  onPageChange?: (number: number) => void;
  currentPageIndicatorTintColor?: string;
  pageIndicatorTintColor?: string;
  pageIndicatorSize?: number;
};

type State = {
  currentPage: number;
};

class PageControlView extends React.Component<Props, State> {
  state = {
    currentPage: this.props.startPage || 0,
  };

  componentDidMount() {
    if (this.props.startPage) this.scrollToPage(this.props.startPage);
  }

  private scrollView = React.createRef<ScrollView>();

  handleScroll = (event: { nativeEvent: NativeScrollEvent }): void => {
    const xOffset = event.nativeEvent.contentOffset.x + 10;
    const currentPage = Math.floor(xOffset / width);
    this.setState({ currentPage });
  };

  handleScrollEnd = (event: { nativeEvent: NativeScrollEvent }): void => {
    const { onPageChange } = this.props;
    const xOffset = event.nativeEvent.contentOffset.x + 10;
    const currentPage = Math.floor(xOffset / width);
    if (this.state.currentPage === currentPage) {
      if (onPageChange && typeof onPageChange === 'function')
        onPageChange(this.state.currentPage);
    }
  };

  scrollToPage = (pageNumber: number): void => {
    if (this.scrollView.current) {
      this.scrollView.current.scrollTo({ x: width * pageNumber });
    }
  };

  render(): JSX.Element {
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
          ref={this.scrollView}
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
