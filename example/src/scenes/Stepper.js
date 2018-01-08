/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, Headline, Subhead, Stepper } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  value: number,
  value2: number,
  value3: number,
};

class StepperExample extends Component<Props, State> {
  state = {
    value: 5,
    value2: 0,
    value3: 0,
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.row}>
          <View>
            <Subhead>Min value: 0</Subhead>
            <Subhead>Max value: 10</Subhead>
            <Subhead>Start value: 5</Subhead>
          </View>
          <Headline>{this.state.value}</Headline>
          <Stepper
            value={this.state.value}
            onChangeCounter={value => this.setState({ value })}
            minValue={0}
            maxValue={10}
          />
        </View>
        <View style={styles.row}>
          <View>
            <Subhead>No min. and max. values</Subhead>
          </View>
          <Headline>{this.state.value2}</Headline>
          <Stepper
            value={this.state.value2}
            onChangeCounter={value2 => this.setState({ value2 })}
          />
        </View>
        <View style={styles.row}>
          <View>
            <Subhead>No min. and max. values.</Subhead>
            <Subhead>Step === 2.</Subhead>
          </View>
          <Headline>{this.state.value3}</Headline>
          <Stepper
            value={this.state.value3}
            onChangeCounter={value3 => this.setState({ value3 })}
            stepValue={2}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(StepperExample));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#666',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
