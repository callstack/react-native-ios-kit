---
id: usage
title: Usage
---

Wrap your root component in [`ThemeProvider`](customization#main-theme-for-application) from **react-native-ios-kit**.

It's a good idea to wrap the component which is passed to `AppRegistry.registerComponent`.

Example:

```jsx
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { ThemeProvider } from 'react-native-ios-kit';
import App from './src/App';

function Main() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
```

The `ThemeProvider` component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.
