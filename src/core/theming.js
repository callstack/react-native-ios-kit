/* @flow */
/* eslint-disable no-redeclare */

import {
  createTheming,
  type ThemingType,
} from '@callstack/react-theme-provider';
import DefaultTheme from '../styles/DefaultTheme';
import type { Theme, ThemeShape } from '../types/Theme';

export const { ThemeProvider, withTheme }: ThemingType<?Theme> = createTheming(
  DefaultTheme
);
