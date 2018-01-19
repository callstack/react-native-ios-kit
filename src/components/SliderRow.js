/* @flow */
import * as React from 'react';

import RowItem from './RowItem';
import Slider from './Slider';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';
import type { IconSource } from './Icon';

type Props = {
  value: number,
  onValueChange: (value: number) => void,
  theme: Theme,
  icon?: IconSource,
  title: string,
  subtitle?: string,
  rightComponent?: React.ComponentType<*>,
  renderRight?: () => React.Element<*>,
  onPress?: Function,
  first: boolean,
  last: boolean,
  stepValue?: number,
  minValue?: number,
  maxValue?: number,
  minIconName?: string,
  maxIconName?: string,
  minIconColor?: string,
  maxIconColor?: string,
  minIconSize?: number,
  maxIconSize?: number,
  style?: any,
  onSlidingComplete?: (value: number) => void,
  minTrackTintColor?: string,
  maxTrackTintColor?: string,
};

class SliderRow extends React.Component<Props> {
  renderRight = () => {
    return (
      <Slider
        value={this.props.value}
        stepValue={this.props.stepValue}
        onValueChange={this.props.onValueChange}
        minValue={this.props.minValue}
        maxValue={this.props.maxValue}
        minIconName={this.props.minIconName}
        maxIconName={this.props.maxIconName}
        minIconColor={this.props.minIconColor}
        maxIconColor={this.props.maxIconColor}
        minIconSize={this.props.minIconSize}
        maxIconSize={this.props.maxIconSize}
        style={this.props.style}
        theme={this.props.theme}
        onSlidingComplete={this.props.onSlidingComplete}
        minTrackTintColor={this.props.minTrackTintColor}
        maxTrackTintColor={this.props.maxTrackTintColor}
      />
    );
  };

  render() {
    const { title, subtitle, first, last, onPress, icon } = this.props;

    return (
      <RowItem
        title={title}
        subtitle={subtitle}
        first={first}
        last={last}
        onPress={onPress}
        icon={icon}
        renderRight={this.renderRight}
      />
    );
  }
}

export default withTheme(SliderRow);
