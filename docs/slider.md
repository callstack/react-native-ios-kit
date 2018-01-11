---
id: slider
title: Slider
---

Slider component.

![Slider component](assets/slider.png)

Example usage: 
```jsx
<Slider
  value={this.state.value2}
  onValueChange={value => this.setState({ value2: value })}
  stepValue={5}
  minIconName="ios-thumbs-down"
  maxIconName="ios-thumbs-up"
  minIconSize={20}
  maxIconSize={20}
/>
```

## Theme
Uses following `theme` properties:
- 

## Props

### `value`
**type:**  `number`

Value of the slider.

### `stepValue` (optional)
**type:** `number`  
**default value:** 1

Step value of the slider. The value should be between 0 and (maximumValue - minimumValue).

### `minValue` (optional)
**type:** `number`   
**default value:** 0

Minimum value of the slider. 

### `maxValue` (optional)
**type:** `number`   
**default value:** 100

Maximum value of the slider. 

### `minIconName` (optional)
**type:** `string` 

Name of the minimum track icon (on the left side).

### `maxIconName` (optional)
**type:** `string`   

Name of the maximum track icon (on the right side).

### `minIconColor` (optional)
**type:** `string`
**default value:** `placeholderColor` from [theme](./theme.html)

Color of the minimum track icon (on the left side).

### `maxIconColor` (optional)
**type:** `string`
**default value:** `placeholderColor` from [theme](./theme.html)

Color of the maximum track icon (on the right side).

### `minIconSize` (optional)
**type:** `number`
**default value:** 28

Size of the minimum track icon (on the left side).

### `maxIconSize` (optional)
**type:** `number`
**default value:** 35

Size of the maximum track icon (on the right side).

### `onValueChange` (optional)
**type:** `(value: number) => void`

Invoked with the new value when the value changes.

### `onSlidingComplete` (optional)
**type:** `(value: number) => void`

Callback that is called when the user releases the slider, regardless if the value has changed.
The current value is passed as an argument to the callback handler.

### `minTrackTintColor` (optional)
**type:** `string`
**default value:** `primaryColor` from [theme](./theme.html)

The color used for the track to the left of the button

### `maxTrackTintColor` (optional)
**type:** `string`
**default value:** `dividerColor` from [theme](./theme.html)

The color used for the track to the right of the button

### `style` (optional)
**type:** `Object`

Custom styles to apply to the Icon.

### `theme` (optional)
**type:** [`Theme`](theme.html)

Custom theme for component. By default provided by the ThemeProvider.

