/* @flow */
import * as React from 'react';
import { SegmentedControlIOS } from 'react-native';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  values: Array<string>,
  onChange: (index: number) => void,
  onValueChange?: (value: string) => void,
  selectedIndex: number,
  tintColor?: string,
};

class SegmentedControl extends React.Component<Props> {
  handleChange = event =>
    this.props.onChange(event.nativeEvent.selectedSegmentIndex);

  render() {
    const { theme, selectedIndex, onValueChange, values } = this.props;
    return (
      <SegmentedControlIOS
        tintColor={theme.primaryColor}
        {...this.props}
        values={values}
        selectedIndex={selectedIndex}
        onChange={this.handleChange}
        onValueChange={onValueChange}
      />
    );
  }
}

export default withTheme(SegmentedControl);
