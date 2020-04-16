// @flow
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, DefaultTheme, Button } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ExampleList, { examples } from './src/ExampleList';
import ThemeSelector from './src/ThemeSelector';

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState<Theme>(DefaultTheme);

  const selectTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
  };

  const openThemesScreen = navigation => {
    navigation.navigate('ThemeSelector', {
      selectTheme,
      selectedTheme: theme,
    });
  };

  useEffect(() => {
    StatusBar.setBarStyle(
      theme === DefaultTheme ? 'dark-content' : 'light-content'
    );
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
            }}
          >
            <Stack.Screen
              name="React Native iOS Kit"
              component={ExampleList}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Button onPress={() => openThemesScreen(navigation)}>
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
