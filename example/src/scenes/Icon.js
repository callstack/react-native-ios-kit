/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Icon } from 'react-native-ios-kit';

export default class IconExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="ios-close-outline" size={100} />
        <Icon name="ios-close-outline" size={50} />
        <Icon name="ios-close-outline" color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 15,
    marginBottom: 48,
  },
});
