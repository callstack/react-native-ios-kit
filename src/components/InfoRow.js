/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import { Body } from './Typography';
import { withTheme } from '../core/theming';
import type { Props as RowProps } from './RowItem';

type Props = RowProps & {
  info: string,
};

class InfoRow extends React.Component<Props> {
  renderRight = () => {
    const {
      info,
      theme: { placeholderColor },
    } = this.props;
    return <Body style={{ color: placeholderColor }}>{info}</Body>;
  };

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(InfoRow);
