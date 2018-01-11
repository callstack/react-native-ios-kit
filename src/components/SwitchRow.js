/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import ToggleButton from './ToggleButton';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  value: boolean,
  onValueChange?: (value: boolean) => *,
};

class SwitchRow extends React.Component<Props> {
  render() {
    const { value, onValueChange } = this.props;
    return (
      <RowItem
        rightComponent={
          <ToggleButton onValueChange={onValueChange} value={value} />
        }
        {...this.props}
      />
    );
  }
}

export default withTheme(SwitchRow);
