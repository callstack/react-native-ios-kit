/* @flow */
import React, { Component } from 'react';
import { Slider } from 'react-native';
import type { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  value: number,
  stepValue: number,
  minValue?: number,
  maxValue?: number,
  minIconName: string,
  maxIconName: string,
  minIconColor?: string,
  maxIconColor?: string,
  style?: any,
  theme: Theme,
  onValueChange: (value: number) => void,
};

class Icon extends Component<Props> {
  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    stepValue: 1,
  };

  render() {
    const {
      value,
      minValue,
      maxValue,
      stepValue,
      minIconName,
      maxIconName,
      minIconColor,
      maxIconColor,
      theme,
      style,
      onValueChange,
    } = this.props;
    return (
      <Slider
        value={value}
        minimumValue={minValue}
        maximumValue={maxValue}
        step={stepValue}
        onValueChange={onValueChange}
      />
    );
  }
}

export default withTheme(Icon);
