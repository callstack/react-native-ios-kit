/* @flow */
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, DarkTheme, useTheme } from 'react-native-ios-kit';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<*>,
  route: {
    params: {
      selectTheme: (theme: 'dark' | 'light') => void,
    },
  },
};

export default function ThemeSelector({ route, navigation }: Props) {
  const { selectTheme } = route.params;

  const theme = useTheme();

  const setTheme = useCallback(
    (selectedTheme: 'dark' | 'light'): void => {
      selectTheme(selectedTheme);
      navigation.goBack();
    },
    [navigation, selectTheme]
  );

  const darkSelected = theme === DarkTheme;

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Button
        disabled={!darkSelected}
        color={theme.textColor}
        inline
        style={styles.button}
        onPress={() => setTheme('light')}
      >
        {`LightTheme ${!darkSelected ? '(Selected)' : ''}`}
      </Button>
      <Button
        disabled={darkSelected}
        inline
        style={styles.button}
        onPress={() => setTheme('dark')}
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
