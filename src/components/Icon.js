/* @flow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  /**
   * Icon name, one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
   */
  name: string,
  /**
   * Custom color for icon, default to iosBlue
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

class Icon extends Component<Props> {
  render() {
    const { name, color, size, theme, style } = this.props;
    return (
      <Ionicons
        color={color || theme.iosBlue}
        name={name}
        size={size || 50}
        style={style}
      />
    );
  }
}

export default withTheme(Icon);

Icon.propTypes = {
  name: Ionicons.propTypes.name,
  theme: PropTypes.object,
  color: PropTypes.string,
  style: PropTypes.any,
  size: PropTypes.number,
};
