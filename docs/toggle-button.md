---
id: toggle-button
title: ToggleButton
---

A basic ToggleButton component that should render native ios toggle button.

![ToggleButton component](assets/toggle-button.png)

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

If true, disable all interactions for this component.

### `onValueChange` (optional)
type: `(value: boolean) => *`

Invoked with the new value when the value changes.

### `onTintColor` (optional)
type: `string`

Background color when the switch is turned on.

### `style` (optional)
type: `Object`  

Switch style.

### `theme` (optional)
type: [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

### `thumbTintColor` (optional)
type: `string`

Color of the foreground switch grip.

### `tintColor` (optional)
type: `string`

Border color when the switch is turned off.

### `value` (optional)
type: `boolean`  

Switch value.
