/* @flow */

import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
} from 'react-native';

import ExampleList from './ExampleList';

export default class HomeScene extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ExampleList,
          title: 'Example',
        }}
        style={styles.container}
        itemWrapperStyle={styles.scene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    paddingTop: 64,
  },
});
