// @flow
import React, { useState, useEffect, useCallback } from 'react';
import { AsyncStorage, StatusBar } from 'react-native';
import {
  ThemeProvider,
  DefaultTheme,
  DarkTheme,
  Button,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExampleList, { examples } from './src/ExampleList';
import ThemeSelector from './src/ThemeSelector';

const Stack = createStackNavigator();

const PREFERENCES_KEY = 'APP_PREFERENCES';

export default function App() {
  const [theme, setTheme] = useState<Theme>(DefaultTheme);

  const selectTheme = (selectedTheme: 'dark' | 'light') => {
    setTheme(selectedTheme === 'dark' ? DarkTheme : DefaultTheme);
  };

  const openThemesScreen = useCallback(navigation => {
    navigation.navigate('ThemeSelector', {
      selectTheme,
    });
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle(
      theme === DefaultTheme ? 'dark-content' : 'light-content'
    );
  }, [theme]);

  useEffect(() => {
    const restorePrefs = async () => {
      try {
        const prefString = await AsyncStorage.getItem(PREFERENCES_KEY);
        const preferences = JSON.parse(prefString || '');
        if (preferences) {
          setTheme(preferences.theme === 'dark' ? DarkTheme : DefaultTheme);
        }
      } catch (e) {
        // ignore error
      }
    };

    restorePrefs();
  }, []);

  useEffect(() => {
    const savePrefs = async () => {
      try {
        await AsyncStorage.setItem(
          PREFERENCES_KEY,
          JSON.stringify({
            theme: theme === DarkTheme ? 'dark' : 'light',
          })
        );
      } catch (e) {
        // ignore error
      }
    };

    savePrefs();
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.barColor,
              },
              headerTitleStyle: {
                color: theme.textColor,
              },
              cardStyle: {
                backgroundColor: theme.backgroundColor,
              },
            }}
          >
            <Stack.Screen
              name="React Native iOS Kit"
              component={ExampleList}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button
                    color="#007aff"
                    onPress={() => openThemesScreen(navigation)}
                    style={{ paddingRight: 15 }}
                  >
                    Theme
                  </Button>
                ),
              })}
            />
            <Stack.Screen name="ThemeSelector" component={ThemeSelector} />
            {examples.map(example => (
              <Stack.Screen
                key={example.title}
                name={example.title}
                component={example.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
