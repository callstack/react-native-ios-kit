/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button, DarkTheme, DefaultTheme } from 'react-native-ios-kit';

import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  navigator: Object,
  selectTheme: (theme: Object) => void,
  selectedTheme: Theme,
};

export default class ThemeSelector extends Component<Props> {
  selectTheme = (theme: Theme): void => {
    this.props.selectTheme(theme);
    StatusBar.setBarStyle(
      theme === DefaultTheme ? 'dark-content' : 'light-content'
    );
    this.props.navigator.pop();
  };
  render() {
    const { selectedTheme } = this.props;
    const darkSelected = selectedTheme === DarkTheme;
    return (
      <View style={styles.container}>
        <Button
          disabled={!darkSelected}
          color={selectedTheme.textColor}
          inline
          style={styles.button}
          onPress={() => this.selectTheme(DefaultTheme)}
        >
          {`LightTheme ${!darkSelected ? '(Selected)' : ''}`}
        </Button>
        <Button
          disabled={darkSelected}
          inline
          style={styles.button}
          onPress={() => this.selectTheme(DarkTheme)}
        >
          {`DarkTheme ${darkSelected ? '(Selected)' : ''}`}
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginVertical: 10,
  },
});
