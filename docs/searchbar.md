---
id: search-bar
title: SearchBar
---

![SearchBar component](assets/search-bar.gif)
 
Example usage:
```jsx
<SearchBar
  value={this.state.text}
  onChangeText={text => this.setState({ text })}
  withCancel
  animated
/>
```
 
## Props

### `animated` (optional) 
**type:** `boolean`  
**default value:** `false`

Indicates if Cancel button and TextInput should animate on focus/blur.

### `animationTime` (optional) 
**type:** `number`  
**default value:** `200`

Animation duration in milliseconds. 

### `cancelText` (optional) 
**type:** `string`  
**default value:** `"Cancel"`

Text of Cancel Button.

### `onChangeText` 
**type:** `(text: string) => void`  

Invoked with the new value when the value of text input changes.


### `onFocus` (optional) 
**type:** `() => void`  

Callback invoked on text input focus

### `onBlur` (optional)
**type:** `() => void`  

Callback invoked on text input blur

### `placeholder` (optional) 
**type:** `string`  
**default value:** `"Search"`

Placeholder of text input. Defaults to "Search".

### `theme` (optional)
**type:** [`Theme`](theme.html)
 
Custom theme for component. By default provided by the ThemeProvider.

### `value` 
**type:** `string`  

Value of text input.

### `withCancel` (optional) 
**type:** `boolean`  
**default value:** `false`

Indicates presence of Cancel button.  
