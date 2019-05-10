/* @flow */

import React, { Component } from 'react';
import { Switch as ReactNativeSwitch } from 'react-native';

import { withTheme } from '../core/theming';
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
  // Border color when the switch is turned on
  trackColor?: string,
  // Color of the foreground switch grip
  thumbColor?: string,
};

class Switch extends Component<Props> {
  render() {
    const { theme, onValueChange, trackColor, ...rest } = this.props;
    return (
      <ReactNativeSwitch
        {...rest}
        onValueChange={onValueChange}
        // $FlowFixMe
        trackColor={trackColor || theme.positiveColor}
      />
    );
  }
}

export default withTheme(Switch);
