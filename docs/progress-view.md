---
id: progress-view
title: ProgressView
---

Displays horizontal progress bar.

![ProgressView component](assets/progress-view.gif)

Example usage: 
```jsx
<ProgressView progress={this.state.progress} />
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
