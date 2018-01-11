/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import { Body } from './Typography';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  info: string,
};

class InfoRow extends React.Component<Props> {
  render() {
    const { info, theme: { placeholderColor }, ...rest } = this.props;
    return (
      <RowItem
        rightComponent={<Body style={{ color: placeholderColor }}>{info}</Body>}
        {...rest}
      />
    );
  }
}

export default withTheme(InfoRow);
