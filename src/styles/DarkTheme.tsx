import color from 'color';
import * as colors from './colors';
import { Theme } from '../types/Theme';

const DarkTheme: Theme = {
  primaryColor: colors.orange,
  primaryLightColor: color(colors.orange).lighten(0.5).string(),
  disabledColor: color(colors.orange).lighten(0.8).string(),
  backgroundColor: 'rgb(17,29,33)',
  barColor: 'rgb(29,58,63)',
  dividerColor: colors.greyD2,
  textColor: colors.white,
  placeholderColor: colors.greyD1,
  footnoteColor: colors.greyL2,
  footnoteBackgroundColor: 'rgb(17, 29, 33)',
  positiveColor: colors.green,
};

export default DarkTheme;
