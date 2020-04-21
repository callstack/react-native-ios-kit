/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, Subhead, Switch, Colors } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  switchValue: boolean,
};

class SwitchExample extends Component<Props, State> {
  state = {
    switchValue: false,
  };
  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.row}>
          <View>
            <Subhead>
              Value: {this.state.switchValue ? 'True' : 'False'}
            </Subhead>
          </View>
          <Switch
            value={this.state.switchValue}
            onValueChange={value => this.setState({ switchValue: value })}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(SwitchExample));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.greyL1,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
