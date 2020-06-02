---
id: info-row
title: InfoRow
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Basic Row to display additional information on right side.

<img alt="InfoRow component " src={useBaseUrl('img/info-row.png')} />


### Example usage:
```jsx
import { InfoRow } from 'react-native-ios-kit';

<InfoRow title="InfoRow" info="1" />
```

## Theme
Uses following `theme` properties:
- `placeholderColor` - color of info string.

## Props

### [RowItem props...](row-item#props)

Other props accepted by `RowItem` component.

### `info`
**type** `string`

Information to be displayed at right side of row.

### `theme` (optional)
**type:** [`Theme`](theme)

Custom theme for component. By default provided by the ThemeProvider.
