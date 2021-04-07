import React, { Component } from 'react';
import { Slider, View, StyleSheet, ViewStyle } from 'react-native';
import type { Theme } from '../types/Theme';
import { withTheme } from '../core/theming';
import Icon from './Icon';

type Props = {
  value: number;
  stepValue: number;
  minValue?: number;
  maxValue?: number;
  minIconName?: string;
  maxIconName?: string;
  minIconColor?: string;
  maxIconColor?: string;
  minIconSize?: number;
  maxIconSize?: number;
  style?: ViewStyle;
  theme: Theme;
  onValueChange: (value: number) => void;
  onSlidingComplete?: (value: number) => void;
  minTrackTintColor?: string;
  maxTrackTintColor?: string;
};

class IosSlider extends Component<Props> {
  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    stepValue: 1,
    minIconSize: 28,
    maxIconSize: 35,
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
      minIconSize,
      maxIconSize,
      theme,
      style,
      onValueChange,
      minTrackTintColor,
      maxTrackTintColor,
      ...rest
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        {minIconName && (
          <Icon
            style={styles.icon}
            name={minIconName}
            size={minIconSize}
            color={minIconColor || theme.placeholderColor}
          />
        )}
        <Slider
          style={styles.slider}
          value={value}
          minimumValue={minValue}
          maximumValue={maxValue}
          step={stepValue}
          onValueChange={onValueChange}
          minimumTrackTintColor={minTrackTintColor || theme.primaryColor}
          maximumTrackTintColor={maxTrackTintColor || theme.dividerColor}
          {...rest}
        />
        {maxIconName && (
          <Icon
            style={styles.icon}
            name={maxIconName}
            size={maxIconSize}
            color={maxIconColor || theme.placeholderColor}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    marginTop: 2,
  },
});

export default withTheme(IosSlider);
