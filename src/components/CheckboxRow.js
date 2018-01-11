/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Icon from './Icon';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  selected: boolean,
  onPress: void => void,
};

class CheckboxRow extends React.Component<Props> {
  render() {
    const { selected, theme: { primaryColor } } = this.props;
    return (
      <RowItem
        rightComponent={
          selected ? (
            <Icon name="ios-checkmark" size={34} color={primaryColor} />
          ) : null
        }
        {...this.props}
      />
    );
  }
}

export default withTheme(CheckboxRow);
