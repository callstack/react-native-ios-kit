---
id: page-control-view  
title: PageControlView
---

PageControlView swipeable view with PageControls at the bottom of the screen.

![PageControl component](assets/page-control-view.gif)

Example usage: 
```jsx
<PageControlView defaultPage={1}>
  <View style={styles.container}>
    <Title1>First page.</Title1>
  </View>
  <View style={styles.container}>
    <Title1>Second page.</Title1>
  </View>
  <View style={styles.container}>
    <Title1>Third page.</Title1>
  </View>
</PageControlView>
```

## Theme
[`PageControl`](page-control.html#theme) uses following `theme` properties:
- `barColor` - current page indicator tint color
- `dividerColor` - page indicator tint color

## Props

### `children`  
**type:** `React.Node`  

Children of PageControlView, each one to be displayed as a separate page.


### `containerStyle` (optional)
**type:** `StyleObj`

Style of wrapper container.

### `startPage` (optional)   
**type:**: `number`  
**default value:** `0`  

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

