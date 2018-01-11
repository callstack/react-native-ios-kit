/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import { Body } from './Typography';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  info: string,
  onPress: void => void,
};

class InfoRow extends React.Component<Props> {
  render() {
    const { info, theme: { placeholderColor } } = this.props;
    return (
      <RowItem
        rightComponent={<Body style={{ color: placeholderColor }}>{info}</Body>}
        {...this.props}
      />
    );
  }
}

export default withTheme(InfoRow);
