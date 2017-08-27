import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import type { Theme } from '../types';
import { withTheme } from '../';

class Button extends Component {
  props: {
    /**
     * Set custom font color
     */
    color?: string,
    /**
     * Disable the button
     */
    disabled?: boolean,
    /**
     * Disable automatic horizontal resize
     * The button will only occupy width it needs, instead of 100%
     */
    inline?: boolean,
    /**
     * Center text inside the button
     * Applies only if rounded prop is not true
     */
    centered?: boolean,
    /**
     * Set rounded border corners
     */
    rounded?: boolean,
    /**
     * Invert font color with background color
     * Applies only if rounded prop is true
     */
    inverted?: boolean,
    /**
     * Function to call when the touch is released
     */
    onPress?: Function,
    onPressIn?: Function,
    onPressOut?: Function,
    onLongPress?: Function,
    /**
     * Global theme to use
     */
    theme?: Theme,
    /**
     * Custom styles to apply to the button
     */
    style?: any,
    /**
     * Custom styles to apply to text inside the button
     */
    innerStyle?: any,
    /**
     * Custom styles to apply to the button
     */
    disabledStyle?: any,
    children: React.Element<*> | [React.Element<*>],
  }

  constructor(props) {
    super(props);
    this.styles = getStyles(this.props.theme || {});
  }

  _styleFromProps() {
    const { centered, rounded, inverted, color, disabled } = this.props;
    const styleFromProps = [];

    const appliedStyleProps = {
      centered,
      rounded,
      disabled,
      inverted,
    };

    Object.keys(appliedStyleProps).forEach(key => {
      const value = appliedStyleProps[key];
      if (value) {
        styleFromProps[styleFromProps.length] = this.styles[key];
      }
    });

    if (disabled && rounded) {
      styleFromProps[styleFromProps.length] = inverted
        ? this.styles.invertedDisabled
        : this.styles.roundedDisabled;
    }

    if (color && !disabled) {
      styleFromProps[styleFromProps.length] = {
        inner: { color },
      };
    }

    return {
      inner: styleFromProps.map(style => style.inner),
      container: styleFromProps.map(style => style.container),
    };
  }

  _renderButton(markup) {
    if (this.props.inline) {
      const wrapperStyle = {
        flexDirection: 'row',
      };
      if (this.props.centered) {
        wrapperStyle.justifyContent = 'center';
      }
      return <View style={wrapperStyle}>{markup}</View>;
    }
    return markup;
  }

  render() {
    const { inner, container } = this._styleFromProps();

    const children = (typeof this.props.children === 'string') ? (
      <Text
        style={[
          this.styles.default.inner,
          ...inner,
          this.props.innerStyle,
        ]}
      >
        {this.props.children}
      </Text>
    ) : this.props.children;

    return this._renderButton(
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        onPressIn={this.props.onPressIn}
        onPressOut={this.props.onPressOut}
        onLongPress={this.props.onLongPress}
        accessibilityTraits="button"
        accessibilityComponentType="button"
        style={[
          this.styles.default.container,
          ...container,
          this.props.style,
          this.props.disabledStyle,
        ]}
      >
        {children}
      </TouchableOpacity>,
    );
  }
}

const getStyles = (theme: Theme) => {
  const { buttonColor, buttonDisabledColor } = theme;

  return {
    default: StyleSheet.create({
      inner: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 17,
        color: buttonColor,
      },
    }),
    disabled: {
      inner: {
        color: buttonDisabledColor,
      },
    },
    centered: StyleSheet.create({
      inner: {
        textAlign: 'center',
      },
    }),
    rounded: StyleSheet.create({
      inner: {
        fontSize: 14,
        textAlign: 'center',
      },
      container: {
        borderWidth: 1,
        borderColor: buttonColor,
        borderRadius: 8,
        justifyContent: 'center',
        padding: 10,
      },
    }),
    roundedDisabled: StyleSheet.create({
      container: {
        borderColor: buttonDisabledColor,
      },
    }),
    inverted: StyleSheet.create({
      inner: {
        color: '#ffffff',
      },
      container: {
        backgroundColor: buttonColor,
      },
    }),
    invertedDisabled: StyleSheet.create({
      container: {
        backgroundColor: buttonDisabledColor,
        borderColor: buttonDisabledColor,
      },
    }),
  };
};

export default withTheme(Button);
