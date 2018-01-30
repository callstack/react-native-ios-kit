/* @flow */

import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  findNodeHandle,
} from 'react-native';

import withTheme from '../../core/withTheme';

import type { Theme } from '../../types/Theme';

// eslint-disable-next-line
const UIManager = require('NativeModules').UIManager;

const SECTION_HEIGHT = 18;

type Props = {
  theme: Theme,
  onSectionPress: Function,
  items: Array<string>,
  sectionPrimaryColor: ?string,
  style: ?any,
};

type State = {
  sections: Array<?string>,
};

class Sections extends PureComponent<Props, State> {
  state = {
    sections: [],
  };

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: this.handleMove,
      onPanResponderGrant: this.handleMove,
    });
  }

  sectionsHeight: ?number;
  sectionsY: ?number;
  panResponder: Object;
  sections: ?any;
  currentSectionIdx: ?number;

  handleContainerLayout = ({ nativeEvent: { layout: { height } } }) => {
    this.setState({ sections: this.prepareSections(height) });
  };

  handleLayout = () => {
    UIManager.measure(
      findNodeHandle(this.sections),
      (x, y, width, height, pageX, pageY) => {
        this.sectionsHeight = height;
        this.sectionsY = pageY;
      }
    );
  };

  handleMove = ({ nativeEvent: { pageY } }) => {
    if (!this.sectionsHeight || !this.sectionsY) {
      return;
    }

    const sectionIdx = Math.round(
      (pageY - this.sectionsY) * this.props.items.length / this.sectionsHeight
    );
    if (
      sectionIdx >= 0 &&
      sectionIdx < this.props.items.length &&
      this.currentSectionIdx !== sectionIdx
    ) {
      this.currentSectionIdx = sectionIdx;
      this.props.onSectionPress(sectionIdx);
    }
  };

  prepareSections(parentHeight: number): Array<?string> {
    const { items } = this.props;

    let slots = (parentHeight - 50) / SECTION_HEIGHT;
    if (slots >= items.length) {
      return [...items];
    }

    if (!(slots % 2)) {
      slots += 1;
    }

    const dotsCount = Math.floor(slots / 2);
    const visibleSectionsCount = slots - dotsCount;
    const sectionsCountPerDot =
      (items.length - visibleSectionsCount) / dotsCount;

    let sum = 0;
    const visibleSections = [items[0], null]; // make first item visible
    for (let i = 0; i < dotsCount - 1; i++) {
      sum += 1 + sectionsCountPerDot;
      const visibleSectionIdx = Math.round(sum);
      visibleSections.push(items[visibleSectionIdx], null);
    }
    visibleSections.push(items[items.length - 1]); // make last item visible
    // Each null in vsibleSections array is a dot
    return visibleSections;
  }

  renderSection = (item, index) => {
    const { sectionPrimaryColor, theme } = this.props;
    if (item) {
      return (
        <Text
          key={index}
          style={[
            { color: sectionPrimaryColor || theme.primaryColor },
            styles.section,
          ]}
        >
          {item}
        </Text>
      );
    }
    return (
      <View key={index} style={styles.dotContainer}>
        <View
          style={[
            { backgroundColor: sectionPrimaryColor || theme.primaryColor },
            styles.dot,
          ]}
        />
      </View>
    );
  };

  render() {
    const { style, theme } = this.props;
    const { sections } = this.state;

    return (
      <View
        style={[
          { backgroundColor: theme.barColor },
          styles.container,
          style && style,
        ]}
        onLayout={this.handleContainerLayout}
      >
        <View
          style={styles.sections}
          {...this.panResponder.panHandlers}
          onLayout={this.handleLayout}
          ref={view => (this.sections = view)}
        >
          {sections.map(this.renderSection)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: 20,
    maxWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sections: {
    width: 45,
  },
  section: {
    fontSize: 14,
    height: SECTION_HEIGHT,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  dotContainer: {
    height: SECTION_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

export default withTheme(Sections);
