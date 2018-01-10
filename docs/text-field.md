---
id: text-field
title: TextField
---

Single-line, fixed-height field, that automatically brings up a keyboard when the user taps it.
Used to request a small amount of information, such as an email address.

![TextField component](assets/text-field.png)

Example usage:
```jsx
<TextField
  placeholder={'Phone number'}
  value={this.state.phone}
  onChangeText={text => this.setState({ phone: text })}
/>
```

## Theme
Uses following `theme` properties:  
- `backgroundColor` - background color  
- `dividerColor` - color of bottom border  
- `placeholderColor` - placeholder color  
- `primaryColor` - pointer and selectionColor  
- `textColor` - text color

## Props

### `containerStyle` (optional)
**type:** `StyleObj`  

Style of TextField's wrapper container

### `inputStyle` (optional)  
**type:** `StyleObj`  

Style od TextField's input

### `onChangeText`
**type:** `(text: string) => void`  

Invoked with the new value when the value of text input changes.

### `placeholder`  
**type** `string`  

Placeholder value
 
### `theme`  
**type:** [`Theme`](theme.html)
 
Custom theme for component. By default provided by the ThemeProvider.
  
