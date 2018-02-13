/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { Toolbar, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

class ToolbarExample extends Component<Props> {
  runAction = (itemIndex: number) => {
    Alert.alert('Action fired', `Action ${itemIndex} fired`);
  };

  render() {
    return (
      <View style={styles.screen}>
        <Toolbar
          items={[
            {
              icon: 'ios-arrow-back',
              onPress: this.runAction,
            },
            {
              icon: 'ios-arrow-forward',
              onPress: this.runAction,
            },
            {
              icon: 'ios-refresh',
              onPress: this.runAction,
            },
            {
              icon: 'ios-share-outline',
              onPress: this.runAction,
              disabled: true,
            },
          ]}
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(ToolbarExample));

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
