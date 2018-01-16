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
  renderRight = () => {
    const { info, theme: { placeholderColor } } = this.props;
    return <Body style={{ color: placeholderColor }}>{info}</Body>;
  };

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(InfoRow);
