---
id: icon
title: Icon
---

Icon component.

![Icon component](assets/icon.png)

Example usage:
```jsx
import { Icon } from 'react-native-ios-kit';

<Icon
  name={'ios-paper-outline'}
  size={30}
  color={'blue'}
/>
```

## Theme
Uses following `theme` properties:
- `primaryColor` - icon color

## Props

### `color` (optional)
**type:** `string`  
**default value:** `primaryColor` from [`theme`](theme.html)

Custom color for icon.

### `name`
**type:** `string | ImageSourcePropType | React.Node<*>`

Icon name, can be:
- one of [Ionicons](https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json),
- [Image source](https://facebook.github.io/react-native/docs/image.html#source),
- any valid `ReactNative` component


### `size` (optional)
**type:** `number`  
**default value:** `50`

Icon size.

### `style` (optional)
**type:** `Object`

Custom styles to apply to the Icon.

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.
