/* @flow */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, DarkTheme, DefaultTheme } from 'react-native-ios-kit';
import { StackNavigationProp } from '@react-navigation/stack';

import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  navigation: StackNavigationProp<*>,
  route: {
    params: {
      selectTheme: (theme: Object) => void,
      selectedTheme: Theme,
    },
  },
};

export default function ThemeSelector({ route, navigation }: Props) {
  const { selectTheme, selectedTheme } = route.params;

  const setTheme = (theme: Theme): void => {
    selectTheme(theme);
    navigation.goBack();
  };

  const darkSelected = selectedTheme === DarkTheme;

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: selectedTheme.backgroundColor },
      ]}
    >
      <Button
        disabled={!darkSelected}
        color={selectedTheme.textColor}
        inline
        style={styles.button}
        onPress={() => setTheme(DefaultTheme)}
      >
        {`LightTheme ${!darkSelected ? '(Selected)' : ''}`}
      </Button>
      <Button
        disabled={darkSelected}
        inline
        style={styles.button}
        onPress={() => setTheme(DarkTheme)}
      >
        {`DarkTheme ${darkSelected ? '(Selected)' : ''}`}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    marginVertical: 10,
  },
});
