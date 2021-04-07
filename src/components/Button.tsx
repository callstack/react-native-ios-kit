import * as React from 'react';
import {
  StyleProp,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import type { Theme } from '../types/Theme';
import { withTheme } from '../core/theming';

export type Props = {
  /**
   * Set custom font color
   */
  color?: string;
  /**
   * Disable the button
   */
  disabled?: boolean;
  /**
   * Disable automatic horizontal resize
   * The button will only occupy width it needs, instead of 100%
   */
  inline?: boolean;
  /**
   * Center text inside the button
   * Applies only if rounded prop is not true
   */
  centered?: boolean;
  /**
   * Set rounded border corners
   */
  rounded?: boolean;
  /**
   * Invert font color with background color
   * Applies only if rounded prop is true
   */
  inverted?: boolean;
  /**
   * Function to call when the touch is released
   */
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  /**
   * Global theme to use
   */
  theme: Theme;
  /**
   * Custom styles to apply to the button
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply to text inside the button
   */
  innerStyle?: StyleProp<ViewStyle>;
  /**
   * Custom styles to apply to the button
   */
  disabledStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  /**
   * Used to locate the item for end to end tests
   */
  testID?: string;
};

class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.styles = getStyles(this.props.theme);
  }

  styles: GetStyleProp;

  _styleFromProps() {
    const { centered, rounded, inverted, color, disabled } = this.props;
    const styleFromProps: StyleObject[] = [];

    const appliedStyleProps = {
      centered,
      rounded,
      disabled,
      inverted,
    };

    (Object.keys(appliedStyleProps) as Array<
      keyof typeof appliedStyleProps
    >).forEach(key => {
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

  _renderButton(markup: React.ReactNode) {
    if (this.props.inline) {
      const wrapperStyle: ViewStyle = {
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
        testID={this.props.testID}
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
type StyleObject = {
  inner?: TextStyle;
  container?: ViewStyle;
};

type GetStyleProp = {
  default: StyleObject;
  disabled: StyleObject;
  centered: StyleObject;
  rounded: StyleObject;
  roundedDisabled: StyleObject;
  inverted: StyleObject;
  invertedDisabled: StyleObject;
};

const getStyles = (theme: Theme): GetStyleProp => {
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
    invertedDisabled: StyleSheet.create({}),
  };
};

export default withTheme(Button);
