---
id: theme
title: Theme
---

Theme provided with `react-native-ios-kit`.

```javascript
export type Theme = {
  primaryColor: string,
  primaryLightColor: string,
  disabledColor: string,
  backgroundColor: string,
  barColor: string,
  dividerColor: string,
  textColor: string,
  placeholderColor: string,
  footnoteColor: string,
  footnoteBackgroundColor: string,
  positiveColor: string,
};
```

Each key of Theme can be overridden and that theme injected into `ThemeProvider` component.

For usage examples see [Customization](customization).
