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
  value2: number,
  value3: number,
  value4: number,
};

class SliderExample extends Component<Props, State> {
  state = {
    value: 5,
    value2: 0,
    value3: 25,
    value4: 25,
  };
  render() {
    return (
      <View style={styles.screen}>
        <Slider
          value={this.state.value}
          onValueChange={value => this.setState({ value })}
          minIconName="ios-volume-mute-outline"
          maxIconName="ios-volume-up"
        />
        <Slider
          value={this.state.value2}
          onValueChange={value => this.setState({ value2: value })}
          stepValue={5}
          minIconName="ios-thumbs-down"
          maxIconName="ios-thumbs-up"
          minIconSize={20}
          maxIconSize={20}
        />
        <Slider
          value={this.state.value3}
          onValueChange={value => this.setState({ value3: value })}
          stepValue={5}
        />
        <Slider
          value={this.state.value4}
          onValueChange={value => this.setState({ value4: value })}
          minIconName="ios-sunny"
          maxIconName="ios-sunny"
          minTrackTintColor={this.props.theme.positiveColor}
          maxTrackTintColor={this.props.theme.primaryColor}
          minIconColor={this.props.theme.positiveColor}
          maxIconColor={this.props.theme.primaryColor}
          minimumValue={10}
          maximumValue={40}
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
