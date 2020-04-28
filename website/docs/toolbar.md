---
id: toolbar
title: Toolbar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Just like TabBar, the Toolbar component appears on the bottom of the application screen. Instead of switching between different views, it allows you to perform actions within the current view, e.g. share or refresh. The Toolbar displays a list of icons or text buttons.

<img alt="Toolbar component " src={useBaseUrl('img/toolbar.png')} />

### Example usage:
```jsx
import { Toolbar } from 'react-native-ios-kit';

<Toolbar
  items={[
    {
      icon: 'ios-arrow-back',
      onPress: this.runAction,
    },
    {
      icon: 'ios-arrow-forward',
      onPress: this.runAction,
    },
    {
      icon: 'ios-refresh',
      onPress: this.runAction,
    },
    {
      icon: 'ios-share-outline',
      onPress: this.runAction,
      disabled: true,
    },
  ]}
/>
```

## Theme
Uses following `theme` properties:
- `barColor` - background color
- `dividerColor` - top border color
- `primaryColor` - icon color and caption color for active item
- `disabledColor` - icon color and caption color for disabled item

## Props

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

### `items`
**type:** `Array<ToolbarItem>`  

Array of Items. Each `ToolbarItem` needs to have below shape:
* `icon`: [Icon name](icon.html#name) (optional)
* `title: string` (optional)
* `onPress: function` - to be called when Item is tapped
* `disabled?: boolean` (optional) - disables an Item
