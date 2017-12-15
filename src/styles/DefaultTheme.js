/* @flow */
import color from 'color';
import * as colors from './colors';
import type { Theme } from '../types/Theme';

/**
 * Default Theme
 */
const DefaultTheme: Theme = {
  primaryColor: colors.blue,
  primaryLightColor: color(colors.blue)
    .lighten(0.5)
    .string(),
  disabledColor: color(colors.blue)
    .lighten(0.8)
    .string(),
  backgroundColor: colors.darkGrey,
  barColor: colors.lightestGrey,
  dividerColor: colors.grey,
  textColor: colors.black,
  placeholderColor: colors.greyD1,
};

export default DefaultTheme;
