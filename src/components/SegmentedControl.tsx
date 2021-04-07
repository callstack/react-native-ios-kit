import React from 'react';
import {
  SegmentedControlIOS,
  NativeSegmentedControlIOSChangeEvent,
} from 'react-native';

import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme;
  /**
   * Provided by the ThemeProvider
   */
  values: Array<string>;
  /**
   * onValueChange event handler
   */
  onValueChange?: (value: string, index: number) => void;
  /**
   * Index of selected value
   */
  selectedIndex: number;
  /**
   * Optional color of selected control. Defaults to theme's primary color
   */
  tintColor?: string;
};

class SegmentedControl extends React.Component<Props> {
  onValueChange = (e: { nativeEvent: NativeSegmentedControlIOSChangeEvent }) =>
    this.props.onValueChange &&
    this.props.onValueChange(
      e.nativeEvent.value,
      e.nativeEvent.selectedSegmentIndex
    );

  render() {
    const { theme, selectedIndex, values, ...rest } = this.props;
    return (
      <SegmentedControlIOS
        tintColor={theme.primaryColor}
        {...rest}
        values={values}
        selectedIndex={selectedIndex}
        onChange={this.onValueChange}
        onValueChange={undefined}
      />
    );
  }
}

export default withTheme(SegmentedControl);
