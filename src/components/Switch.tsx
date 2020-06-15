import React, { Component } from 'react';
import { Switch as ReactNativeSwitch, SwitchProps } from 'react-native';
import { withTheme } from '../core/theming';
import { Theme } from '../types/Theme';

type Props = {
  // Disable switch
  disabled?: boolean;
  // Switch value
  value?: boolean;
  // Switch style
  style?: Object;
  // Provided by the ThemeProvider
  theme: Theme;
  // onChange prop
  onValueChange?: (value: boolean) => void;
  // Border color when the switch is turned on
  trackColor?: SwitchProps['trackColor'];
  // Color of the foreground switch grip
  thumbColor?: string;
};

class Switch extends Component<Props> {
  render() {
    const { onValueChange, trackColor, ...rest } = this.props;
    return (
      <ReactNativeSwitch
        {...rest}
        onValueChange={onValueChange}
        // ts-ignore
        trackColor={trackColor}
      />
    );
  }
}

export default withTheme(Switch);
