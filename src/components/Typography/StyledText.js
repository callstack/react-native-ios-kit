/* @flow */

import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const trackingToSpacing =
  (fontSize: number, tracking: number): number => (fontSize * tracking) / 1000;

const resolveFontSizeFromStyle = (style?: Object | number | Array<Object | number>) => {
  if (!style) {
    return 0;
  }

  if (Array.isArray(style)) {
    return style.reduce(
      (acc, elem) => resolveFontSizeFromStyle(elem) || acc,
      0,
    );
  }

  const realStyle = typeof style === 'number'
    ? StyleSheet.flatten(style)
    : style;


  return realStyle.fontSize;
};

type Props = {
  style?: any;
  children?: any;
  config: Object;
};

class StyledText extends Component<void, Props, void> {
  
  render() {
    const {
      style,
      children,
      config,
      ...rest
    } = this.props;
    const fontSize = resolveFontSizeFromStyle(style) || config.fontSize;
    const letterSpacing = trackingToSpacing(fontSize, config.tracking);

    const calculatedStyle = {
      fontSize,
      fontWeight: config.fontWeight,
      letterSpacing,
      lineHeight: config.leading,
    };

    return (
      <Text
        style={[calculatedStyle, style]}
        {...rest}
      >
        {children}
      </Text>
    );
  }
}

export default StyledText;