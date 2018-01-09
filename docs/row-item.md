---
id: row-item
title: RowItem
---

A component you can use as a children for [`TableView`](table-view.html).

![RowItem component](assets/row-item.png)

Example usage:
```jsx
<RowItem
  icon="ios-map-outline"
  title="Navigation"
  subtitle="Get your directions"
  rightComponent={ArrowRight}
  onPress={() => alert('Hello')}
/>
```

## Theme
Uses following theme properties:
- `barColor` - background color
- `footnoteColor` - underline color
- `primaryColor` - icon color

## Props

### `icon` (optional)
**type:** `string`

Icon name. See ['Icon`](icon.html)

### `onPress` (optional)
**type:** `() => void`

Invoked on RowItem's onPress event.

### `rightComponent` (optional)
**type:** `React.Element<*>`

Component to be displayed on the right side of row.

### `subtitle` (optional)
**type:** `string`

Subtitle text to be displayed.

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

### `title` (optional)
**type:** `string`

Title text to be displayed.
