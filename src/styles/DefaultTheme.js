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
  backgroundColor: colors.greyL1,
  barColor: colors.greyL2,
  dividerColor: colors.grey,
  textColor: colors.black,
  placeholderColor: colors.greyD2,
};

export default DefaultTheme;
