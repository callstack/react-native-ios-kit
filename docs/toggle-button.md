---
id: toggle-button
title: ToggleButton
---

A basic ToggleButton component that should render native ios toggle button.

Example usage:
```jsx
<ToggleButton
  value={this.state.toggleValue}
  onValueChange={value => this.setState({ toggleValue: value })}
/>
```

## Props

### `disabled` (optional)
type: `boolean`  

Disable switch

### `value` (optional)
type: `boolean`  

Switch value

### `style` (optional)
type: `Object`  

Switch style

### `theme` (optional)
type: [`Theme`](theme.html)

Provided by the ThemeProvider

### `onValueChange` (optional)
type: `(value: boolean) => *`

onChange prop

### `onTintColor` (optional)
type: `string`

Background color when the switch is turned on

### `thumbTintColor` (string)
type: `string`

Color of the foreground switch grip

### `tintColor` (optional)
type: `string`

Border color when the switch is turned off.
