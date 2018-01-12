/* @flow */
import * as React from 'react';
import { SegmentedControlIOS } from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  /**
   * Provided by the ThemeProvider
   */
  values: Array<string>,
  /**
   * Array of strings to display inside controls
   */
  onChange?: (index: number) => void,
  /**
   * onChange event handler
   */
  onValueChange?: (value: string) => void,
  /**
   * Index of selected value
   */
  selectedIndex: number,
  /**
   * Optional color of selected control. Defaults to theme's primary color
   */
  tintColor?: string,
};

class SegmentedControl extends React.Component<Props> {
  handleChange = event =>
    this.props.onChange &&
    this.props.onChange(event.nativeEvent.selectedSegmentIndex);

  render() {
    const { theme, selectedIndex, onValueChange, values, ...rest } = this.props;
    return (
      <SegmentedControlIOS
        tintColor={theme.primaryColor}
        {...rest}
        values={values}
        selectedIndex={selectedIndex}
        onChange={this.handleChange}
        onValueChange={onValueChange}
      />
    );
  }
}

export default withTheme(SegmentedControl);
