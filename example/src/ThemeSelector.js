/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Button } from 'react-native-ios-kit';
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
      theme === lightTheme ? 'dark-content' : 'light-content'
    );
    this.props.navigator.pop();
  };
  render() {
    const { selectedTheme } = this.props;
    const darkSelected = selectedTheme === darkTheme;
    return (
      <View style={styles.container}>
        <Button
          disabled={!darkSelected}
          color={selectedTheme.text}
          inline
          style={styles.button}
          onPress={() => this.selectTheme(lightTheme)}
        >
          {`LightTheme ${!darkSelected ? '(Selected)' : ''}`}
        </Button>
        <Button
          disabled={darkSelected}
          inline
          style={styles.button}
          onPress={() => this.selectTheme(darkTheme)}
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

const darkTheme = {
  iosBlue: '#FF9500',
  phoneFieldBackground: '#0D0D0D',
  barColor: '#181818',
  borderColor: '#181818',
  footNoteColor: '#8A8A8F',
  highlightColor: '#D9D9D9',
  buttonColor: '#FF9500',
  buttonDisabledColor: '#7A7A7A',
  newMessageIndicator: '#FF9500',
  messageColor: '#8C8C8C',
  avatarBackground: '#CDCED2',
  underlayColor: '#E5E6EA',
  arrowIcon: '#CDCED2',
  text: '#fff',
  textField: {
    subtitleColor: '#8C8C8C',
    iconColor: '#CDCED2',
  },
};
const lightTheme = {
  iosBlue: '#007AFF',
  phoneFieldBackground: '#FFFFFF',
  barColor: '#F9F9F9',
  borderColor: '#C8C7CC',
  footNoteColor: '#8A8A8F',
  highlightColor: '#D9D9D9',
  buttonColor: '#007AFF',
  buttonDisabledColor: '#cdcdcd',
  newMessageIndicator: '#007AFF',
  messageColor: '#8C8C8C',
  avatarBackground: '#CDCED2',
  underlayColor: '#E5E6EA',
  arrowIcon: '#CDCED2',
  text: '#000',
  textField: {
    subtitleColor: '#8C8C8C',
    iconColor: '#CDCED2',
  },
};
