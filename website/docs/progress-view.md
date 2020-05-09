---
id: progress-bar
title: ProgressBar
---
import useBaseUrl from '@docusaurus/useBaseUrl';

Displays horizontal progress bar.

<img alt="ProgressBar component " src={useBaseUrl('img/progress-bar.gif')} />

### Example usage:
```jsx
import { ProgressBar } from 'react-native-ios-kit';

<ProgressBar progress={this.state.progress} />
```

## Theme  
Uses following `theme` properties:
- `primaryColor` - color of the progress bar.

## Props

### `progress`   
**type:** `number` (in range from `0` to `1`)  

Current value of progress.

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.
