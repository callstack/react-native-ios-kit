/* @flow */
import color from 'color';
import * as colors from './colors';
import type { Theme } from '../types/Theme';

const DarkTheme: Theme = {
  primary: colors.orange,
  primaryLight: color(colors.orange)
    .lighten(0.5)
    .string(),
  disabled: color(colors.orange)
    .lighten(0.8)
    .string(),
  background: colors.black,
  barColor: color(colors.black)
    .lighten(0.9)
    .string(),
  dividerColor: colors.greyD2,
  text: colors.white,
  placeholder: colors.greyD1,
};

export default DarkTheme;
