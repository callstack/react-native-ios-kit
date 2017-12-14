/* @flow */
import color from 'color';
import * as colors from './colors';
import type { Theme } from '../types/Theme';

/**
 * Default Theme
 */
const DefaultTheme: Theme = {
  primary: colors.blue,
  primaryLight: color(colors.blue)
    .lighten(0.5)
    .string(),
  disabled: color(colors.blue)
    .lighten(0.8)
    .string(),
  background: colors.darkGrey,
  barColor: colors.lightestGrey,
  dividerColor: colors.grey,
  text: colors.black,
  placeholder: colors.greyD1,
};

export default DefaultTheme;
