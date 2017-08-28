/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Button, ThemeProvider } from 'react-native-ios-kit';

export default class Buttons extends Component {
  render() {
    return (
      <ThemeProvider>
        <View style={styles.container}>
          <Button inline style={styles.button}>Button (inline)</Button>
          <Button disabled style={styles.button}>Button disabled</Button>
          <Button
            inline
            centered
            color={customColor}
            style={styles.button}
          >
            Button (inline/centered)
          </Button>
          <Button
            disabled
            centered
            color={customColor}
            style={styles.button}
          >
            Button (centered/disabled)
          </Button>
          <Button
            style={styles.button}
            inline
            rounded
          >
            Button (inline/rounded)
          </Button>
          <Button
            style={styles.button}
            rounded
          >
            Button (rounded)
          </Button>
          <Button
            style={styles.button}
            rounded
            disabled
          >
            Button (rounded/disabled)
          </Button>
          <View style={styles.combineButtonsContainer}>
            <Button
              rounded
              style={[styles.roundedButton, styles.roundedButtonLeft]}
            >
              Button (rounded)
            </Button>
            <Button
              rounded
              inverted
              style={[styles.roundedButton, styles.roundedButtonRight]}
            >
              Button (rounded/inverted)
            </Button>
          </View>
          <View style={styles.combineButtonsContainer}>
            <Button
              rounded
              style={[styles.roundedButton, styles.roundedButtonLeft]}
            >
              Button (rounded)
            </Button>
            <Button
              rounded
              inverted
              disabled
              style={[styles.roundedButton, styles.roundedButtonRight]}
            >
              Button (rounded/disabled)
            </Button>
          </View>
          <Button
            centered
            color={customColor}
            style={[styles.button, styles.customBorder]}
          >
            Custom button + centered
          </Button>
          <Button
            centered
            disabled
            color={customColor}
            style={[styles.button, styles.customBorder]}
            disabledStyle={styles.customDisabledBorder}
          >
            Custom button (centered/disabled)
          </Button>
        </View>
      </ThemeProvider>
    );
  }
}

const customColor = '#FF3A30';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
  button: {
    marginVertical: 5,
  },
  combineButtonsContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  roundedButton: {
    flex: 1,
  },
  roundedButtonLeft: {
    marginRight: 5,
  },
  roundedButtonRight: {
    marginLeft: 5,
  },
  customBorder: {
    borderWidth: 1,
    borderColor: customColor,
    paddingVertical: 10,
  },
  customDisabledBorder: {
    borderColor: '#cdcdcd',
  },
});
