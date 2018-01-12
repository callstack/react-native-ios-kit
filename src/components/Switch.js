/* @flow */

import React, { Component } from 'react';
import { Switch as ReactNativeSwitch } from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  // Disable switch
  disabled?: boolean,
  // Switch value
  value?: boolean,
  // Switch style
  style?: Object,
  // Provided by the ThemeProvider
  theme: Theme,
  // onChange prop
  onValueChange?: (value: boolean) => *,
  // Background color when the switch is turned on
  onTintColor?: string,
  // Color of the foreground switch grip
  thumbTintColor?: string,
  // Border color when the switch is turned off.
  tintColor?: string,
};

class Switch extends Component<Props> {
  render() {
    const { theme, onValueChange, onTintColor, ...rest } = this.props;
    return (
      <ReactNativeSwitch
        {...rest}
        onValueChange={onValueChange}
        onTintColor={onTintColor || theme.positiveColor}
      />
    );
  }
}

export default withTheme(Switch);
