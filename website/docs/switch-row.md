---
id: switch-row
title: SwitchRow
---
import useBaseUrl from '@docusaurus/useBaseUrl';

RowItem with Switch button as RightComponent.

<img alt="SwitchRow component " src={useBaseUrl('img/switch-row.png')} />

### Example usage:
```jsx
import { SwitchRow } from 'react-native-ios-kit';

<SwitchRow
  title="SwitchRow"
  value={this.state.switchSelected}
  onValueChange={value => this.setState({ switchSelected: value })}
/>
```

## Theme
Uses following `theme` properties:
- `positiveColor` - selected switch background color (`trackColor`)

## Props

### [RowItem props...](row-item.html#props)

Other props accepted by `RowItem` component.

### `onValueChange`
**type:** `(value: boolean) => *`

Invoked with the new value when the value changes.

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

### `value`
**type** `boolean`

Value of [Switch](switch.html).
