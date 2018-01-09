---
id: table-view
title: TableView
---

A basic TableView component that can render ios table view.
It renders header, footer and children which can be [`RowItem`](row-item.html) components.  


![TableView component](assets/table-view.png)

Example usage:
```jsx
<ScrollView>
  <TableView header="Header" footer="footer...">
    <RowItem
      icon="ios-map-outline"
      title="Navigation"
    />
    <RowItem
      icon="ios-settings"
      title="Settings"
    />
  </TableView>
  <TableView footer="PrivacyPolicy" onFooterPress={() => alert('Hello')}>
    <RowItem title="No Icon" />
  </TableView>
</ScrollView>
```

## Theme
Uses following theme properties:
- `footnoteBackgroundColor` - background color of header and footer
- `footnoteColor` - text color of header and footer
- `primaryColor` - text color of footer if there is `onFooterPress` prop

## Props

### `children`
**type:** `React.ChildrenArray<*>`

Cildren of TableView. Could be [`RowItem`](row-item.html) components.

### `footer` (optional)
**type:** `string`

Footer text of TableView

### `footerStyle` (optional)
**type:** `Object`

Custom footer style.

### `header` (optional)
**type:** `string`

Header text of TableView.

### `headerStyle` (optional)
**type:** `Object`

Custom styles for header.

### `onFooterPress` (optional)
**type:** `() => void`

Invoked on footer press. 

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

### `withoutHeader` (optional)
**type:** `boolean`

Indicates whether render empty header or not. If `true` it won`t render header.

### `withoutFooter` (optional)
**type:** `boolean`

Whether render empty footer or not. If `true` it won't render footer.
