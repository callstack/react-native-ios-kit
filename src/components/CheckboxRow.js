/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Icon from './Icon';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';
import type { IconSource } from './Icon';

type Props = {
  theme: Theme,
  selected: boolean,
  onPress: void => void,

  icon?: IconSource,
  title?: string,
  subtitle?: string,
  first?: boolean,
  last?: boolean,
};

class CheckboxRow extends React.Component<Props> {
  renderRight = () => {
    const { selected, theme: { primaryColor } } = this.props;
    if (selected) {
      return <Icon name="ios-checkmark" size={34} color={primaryColor} />;
    }
    return null;
  };

  render() {
    const { icon, title, subtitle, first, last } = this.props;
    return (
      <RowItem
        renderRight={this.renderRight}
        icon={icon}
        title={title}
        subtitle={subtitle}
        first={first}
        last={last}
      />
    );
  }
}

export default withTheme(CheckboxRow);
