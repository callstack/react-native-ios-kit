/* @flow */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

import { withTheme } from '../../';
import type { Theme } from '../../types/Theme';

const trackingToSpacing = (fontSize: number, tracking: number): number =>
  fontSize * tracking / 1000;

const resolveFontSizeFromStyle = (
  style?: Object | number | Array<Object | number>
) => {
  if (!style) {
    return 0;
  }

  if (Array.isArray(style)) {
    return style.reduce(
      (acc, elem) => resolveFontSizeFromStyle(elem) || acc,
      0
    );
  }

  const realStyle =
    typeof style === 'number' ? StyleSheet.flatten(style) : style;

  return realStyle ? realStyle.fontSize : null;
};

type Props = {
  style?: any,
  children?: any,
  config: Object,
  theme: Theme,
};

class StyledText extends Component<Props> {
  render() {
    const { style, children, config, theme, ...rest } = this.props;
    const fontSize = resolveFontSizeFromStyle(style) || config.fontSize;
    const letterSpacing = trackingToSpacing(fontSize, config.tracking);

    const calculatedStyle = {
      fontSize,
      fontWeight: config.fontWeight,
      letterSpacing,
      lineHeight: config.leading,
      color: theme.textColor,
    };
    return (
      <Text style={[calculatedStyle, style]} {...rest}>
        {children}
      </Text>
    );
  }
}

export default withTheme(StyledText);
