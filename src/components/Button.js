/* @flow */

import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  TouchableOpacityStyle,
  TextStyle,
} from 'react-native';

import type { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
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
  onPress?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  onLongPress?: () => void,
  /**
   * Global theme to use
   */
  theme: Theme,
  /**
   * Custom styles to apply to the button
   */
  style?: StyleProp<TouchableOpacityStyle>,
  /**
   * Custom styles to apply to text inside the button
   */
  innerStyle?: StyleProp<TextStyle>,
  /**
   * Custom styles to apply to the button
   */
  disabledStyle?: StyleProp<TouchableOpacityStyle>,
  children: React.Element<*> | React.Element<*>[] | string,
};

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.styles = getStyles(this.props.theme);
  }

  styles: Object;

  _styleFromProps() {
    const { centered, rounded, inverted, color, disabled } = this.props;
    const styleFromProps: Object[] = [];

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
        // $FlowFixMe
        wrapperStyle.justifyContent = 'center';
      }
      return <View style={wrapperStyle}>{markup}</View>;
    }
    return markup;
  }

  render() {
    const { inner, container } = this._styleFromProps();

    const children =
      typeof this.props.children === 'string' ? (
        <Text
          style={[this.styles.default.inner, ...inner, this.props.innerStyle]}
        >
          {this.props.children}
        </Text>
      ) : (
        this.props.children
      );

    return this._renderButton(
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={this.props.onPress}
        onPressIn={this.props.onPressIn}
        onPressOut={this.props.onPressOut}
        onLongPress={this.props.onLongPress}
        accessibilityRole="button"
        style={[
          this.styles.default.container,
          ...container,
          this.props.style,
          this.props.disabledStyle,
        ]}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const getStyles = (theme: Theme) => {
  const { primaryColor, disabledColor } = theme;

  return {
    default: StyleSheet.create({
      inner: {
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: 17,
        color: primaryColor,
      },
    }),
    disabled: {
      inner: {
        color: disabledColor,
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
        borderColor: primaryColor,
        borderRadius: 8,
        justifyContent: 'center',
        padding: 10,
      },
    }),
    roundedDisabled: StyleSheet.create({
      container: {
        borderColor: disabledColor,
      },
    }),
    inverted: StyleSheet.create({
      inner: {
        color: '#ffffff',
      },
      container: {
        backgroundColor: primaryColor,
      },
    }),
    invertedDisabled: StyleSheet.create({
      // eslint-disable-next-line react-native/no-unused-styles
      container: {
        backgroundColor: disabledColor,
        borderColor: disabledColor,
      },
    }),
  };
};

export default withTheme(Button);
