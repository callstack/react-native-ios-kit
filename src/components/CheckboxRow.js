/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Icon from './Icon';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';
import type { Props as RowProps } from './RowItem';

type Props = RowProps & {
  theme: Theme,
  selected: boolean,
  onPress: void => void,
};

class CheckboxRow extends React.Component<Props> {
  renderRight = () => {
    const { selected, theme } = this.props;
    if (selected) {
      return (
        <Icon
          name="ios-checkmark"
          size={34}
          color={theme.primaryColor}
          theme={theme}
        />
      );
    }
    return null;
  };

  render() {
    return <RowItem renderRight={this.renderRight} {...this.props} />;
  }
}

export default withTheme(CheckboxRow);
