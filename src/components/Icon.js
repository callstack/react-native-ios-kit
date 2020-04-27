/* @flow */
import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import type { ImageSource } from 'react-native/Libraries/Image/ImageSource';
import Ionicons from 'react-native-vector-icons/Ionicons';

import type { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  /**
   * ImageSource name. Can be one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json or source of ReactNative's `image` or any valid React Component
   */
  name?: ImageSource,
  /**
   * Custom color for icon, default to primary
   */
  color?: string,
  /**
   * Optional icon size, defaults to 50
   */
  size?: number,
  /**
   * Custom styles to apply to the Icon
   */
  style?: any,
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
};

class Icon extends React.Component<Props> {
  static defaultProps = {
    size: 50,
  };
  render() {
    const { name, color, size, theme, style, ...rest } = this.props;
    if (typeof name === 'string') {
      return (
        <Ionicons
          color={color || theme.primaryColor}
          name={name}
          size={size}
          style={style}
        />
      );
    } else if (
      (typeof name === 'object' &&
        name !== null &&
        // eslint-disable-next-line
        (name.hasOwnProperty('uri') && typeof name.uri === 'string')) ||
      typeof name === 'number'
    ) {
      return (
        <Image
          {...rest}
          source={name}
          style={[
            {
              width: size,
              height: size,
            },
            style,
          ]}
        />
      );
    }
    return (
      <View
        {...rest}
        style={[
          {
            width: size,
            height: size,
          },
          styles.container,
          style,
        ]}
      >
        {(name: any)}
      </View>
    );
  }
}

export default withTheme(Icon);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
