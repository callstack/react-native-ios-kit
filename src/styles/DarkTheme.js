/* @flow */
import color from 'color';
import * as colors from './colors';
import type { Theme } from '../types/Theme';

const DarkTheme: Theme = {
  primaryColor: colors.orange,
  primaryLightColor: color(colors.orange)
    .lighten(0.5)
    .string(),
  disabledColor: color(colors.orange)
    .lighten(0.8)
    .string(),
  backgroundColor: colors.black,
  barColor: color(colors.black)
    .lighten(0.9)
    .string(),
  dividerColor: colors.greyD2,
  textColor: colors.white,
  placeholderColor: colors.greyD1,
};

export default DarkTheme;
