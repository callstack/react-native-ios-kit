/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, Slider } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  value: number,
};

class SliderExample extends Component<Props, State> {
  state = {
    value: 5,
  };
  render() {
    return (
      <View style={styles.screen}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(SliderExample));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
