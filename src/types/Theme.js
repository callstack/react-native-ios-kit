/* @flow */

export type Theme = {
  primaryColor: string,
  primaryLightColor: string,
  disabledColor: string,
  backgroundColor: string,
  barColor: string,
  dividerColor: string,
  textColor: string,
  placeholderColor: string,
  footnoteColor: string,
  footnoteBackgroundColor: string,
  positiveColor: string,
};
export type ThemeShape = $Shape<{
  ...Theme,
  colors: $Shape<$PropertyType<Theme, 'colors'>>,
  fonts: $Shape<$PropertyType<Theme, 'fonts'>>,
}>;
