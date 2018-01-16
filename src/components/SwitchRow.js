/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Switch from './Switch';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  value: boolean,
  onValueChange?: (value: boolean) => *,
};

class SwitchRow extends React.Component<Props> {
  renderRight = () => {
    const { value, onValueChange, theme } = this.props;
    return <Switch onValueChange={onValueChange} theme={theme} value={value} />;
  };

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(SwitchRow);
