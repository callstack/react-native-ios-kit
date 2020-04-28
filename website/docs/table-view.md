---
id: table-view
title: TableView
---
import useBaseUrl from '@docusaurus/useBaseUrl';

A basic TableView component that can render iOS table view.
It renders header, footer and children which can be [`RowItem`](row-item.html) components.  


<img alt="TableView component " src={useBaseUrl('img/table-view.png')} />

### Example usage:
```jsx
import { ScrollView, TableView } from 'react-native-ios-kit';

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

## TableView rows
There are few ready for use row components:
- [`RowItem`](row-item.html) - basic row item
- [`InfoRow`](info-row.html) - row with simple text
- [`CheckboxRow`](checkbox-row.html) - row with checkbox
- [`NavigationRow`](navigation-row.html) - row for navigation
- [`SwitchRow`](switch-row.html) - row with switch
- [`TextFieldRow`](text-field-row.html) - row with text field


## Theme
Uses following theme properties:
- `footnoteBackgroundColor` - background color of header and footer
- `footnoteColor` - text color of header and footer
- `primaryColor` - text color of footer if there is `onFooterPress` prop

## Props

### `children`
**type:** `React.ChildrenArray<*>`

Children of TableView. Could be [`RowItem`](row-item.html) components.

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

Indicates whether render empty header or not. If `true` it won't render header.

### `withoutFooter` (optional)
**type:** `boolean`

Whether render empty footer or not. If `true` it won't render footer.
