/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, Subhead, ToggleButton } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  toggleValue: boolean,
};

class ToggleButtonExample extends Component<Props, State> {
  state = {
    toggleValue: false,
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.row}>
          <View>
            <Subhead>
              Value: {this.state.toggleValue ? 'True' : 'False'}
            </Subhead>
          </View>
          <ToggleButton
            value={this.state.toggleValue}
            onValueChange={value => this.setState({ toggleValue: value })}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(ToggleButtonExample));

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
