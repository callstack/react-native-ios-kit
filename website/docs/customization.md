---
id: customization
title: Customization
---

## Main theme for application

You can provide a custom theme to customize the colors, fonts etc. with the `ThemeProvider` component.
Check the [Theme Type](theme) to see what customization options are supported.

Example:

```jsx
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  primaryColor: 'tomato',
  primaryLightColor: color('tomato').lighten(0.2).rgb().string(),
  disabledColor: 'yellow',
};

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

## Customization per component

You can also customize theme per one component by using `theme` prop.

Example:
```jsx
import { Icon } from 'react-native-ios-kit';

<Icon
  name="ios-people"
  theme={{
    primaryColor: 'green'
  }}
>
```
This code will change icon color to `green`

## Using the theme in your own components
You can access theme in your own components using the `withTheme` HOC exported from the library. You will receive [`theme`](theme.html) prop if you wrap your component with the HOC.

Components wrapped with `withTheme` support the theme from the `ThemeProvider` as well as from the `theme` prop.

Example:
```jsx
import { Text } from 'react-native';

const CustomComponent = ({ theme }) => (
  <Text style={{ color: theme.primaryColor }}>
    Morning!
  </Text>
)

export default withTheme(CustomComponent);
```
