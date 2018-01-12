/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Slider from './Slider';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  title?: string,
  subtitle?: string,
  value: string,
  placeholder?: string,
  onValueChange: (text: string) => void,
};

class SliderRow extends React.Component<Props> {
  renderRightComponent = () => <Slider {...this.props} />;

  render() {
    const { title, subtitle } = this.props;
    return (
      <RowItem
        title={title}
        subtitle={subtitle}
        rightComponent={this.renderRightComponent()}
        {...this.props}
      />
    );
  }
}

export default withTheme(SliderRow);
