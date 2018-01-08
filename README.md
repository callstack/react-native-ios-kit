# react-native-ios-kit &middot; [![Build Status][build-badge]][build] [![MIT License][license-badge]][license] [![Chat][chat-badge]][chat]

![](https://circleci.com/gh/callstack-io/react-native-ios-kit/tree/master.svg?style=shield&circle-token=fbd52d6f78729e0e92ad5d03f95ec445fffbd070)

The missing React Native UI Kit for iOS.

![](./assets/react-native-ios-kit.png)

## Try it out

```
cd example && npm run ios
```

## Getting Started

### Installation

Open a Terminal in your project's folder and run,

```sh
  yarn add react-native-ios-kit react-native-vector-icons
```
After installation, you'll need to link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).


### Usage

Wrap your root component in **Provider** from **react-native-ios-kit**.

It's a good idea to wrap the component which is passed to **AppRegistry.registerComponent**.

Example:

```javascript
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

The **ThemeProvider** component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.

### Customization

You can provide a custom theme to customize the colors, fonts etc. with the **Provider** component.
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

### Components

Check all the components and its usage in our [docs page](https://callstack.github.io/react-native-ios-kit/button.html).




<!-- badges -->
[build-badge]: https://img.shields.io/travis/callstack/react-native-ios-kit/master.svg?style=flat-square
[build]: https://circleci.com/gh/callstack/react-native-ios-kit
[license-badge]: https://img.shields.io/npm/l/react-native-ios-kit.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[chat-badge]: https://img.shields.io/badge/chat-slack-brightgreen.svg?style=flat-square&colorB=E01563
[chat]: https://callstackoss.slack.com/
