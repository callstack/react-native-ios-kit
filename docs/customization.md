---
id: customization
title: Customization
---

You can provide a custom theme to customize the colors, fonts etc. with the **Provider** component.
Check the [Theme Type](theme) to see what customization options are supported.

Example:

```javascript
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryColor: 'tomato',
    primaryLightColor: color('tomato').lighten(0.2).rgb().string(),
    textColor: 'yellow',
  },
};

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```
