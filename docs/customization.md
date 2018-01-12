---
id: customization
title: Customization
---

## Main theme for application

You can provide a custom theme to customize the colors, fonts etc. with the `ThemeProvider` component.
Check the [Theme Type](theme.html) to see what customization options are supported.

Example:

```javascript
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
```
  <Icon
    name="ios-people"
    theme={{
      primaryColor: 'green'
    }}
  >
```
This code will change icon color to `green`

## Using the theme in your own components
You can access theme in your own componentsusing the `withTheme` HOC exported from the library. You will recieve [`theme`](theme.html) prop if you wrap your component with the HOC.

Components wrapped with `withTheme` support the theme from the `ThemeProvider` as well as from the `theme` prop.

Example:
```
const CustomComponent = ({ theme }) => (
  <Text style={{ color: theme.primaryColor }}>
    Morning!
  </Text>
)

export default withTheme(CustomComponent);
```
