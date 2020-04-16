/* @flow */
/* eslint-disable no-redeclare */

import {
  createTheming,
  type ThemingType,
} from '@callstack/react-theme-provider';
import DefaultTheme from '../styles/DefaultTheme';
import type { Theme } from '../types/Theme';

export const {
  ThemeProvider,
  withTheme,
  useTheme,
}: ThemingType<?Theme> = createTheming(DefaultTheme);
