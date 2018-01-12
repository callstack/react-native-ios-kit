/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { SegmentedControl, Body, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  selectedIndex: number,
  selectedValue: string,
};
class SegmentedExample extends Component<Props, State> {
  state = {
    selectedIndex: 0,
    selectedValue: 'One',
  };
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControl
          values={['One', 'Two', 'Three']}
          selectedIndex={this.state.selectedIndex}
          onValueChange={(value, index) =>
            this.setState({
              selectedValue: value,
              selectedIndex: index,
            })
          }
          style={{ width: 222, alignSelf: 'center' }}
        />
        <View style={styles.content}>
          <Body>index: {this.state.selectedIndex}</Body>
          <Body>value: {this.state.selectedValue}</Body>
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(SegmentedExample));

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  content: {
    padding: 10,
  },
});
