/**
 * @flow
 */

import type { Theme } from '../types/Theme';

/**
 * Default Apple Theme
 */
const defaultTheme: Theme = {
  iosBlue: 'rgb(0, 122, 255)',
  phoneFieldBackground: '#FFFFFF',
  barColor: '#F9F9F9',
  borderColor: '#C8C7CC',
  footNoteColor: '#8A8A8F',
  highlightColor: '#D9D9D9',
  buttonColor: '#007AFF',
  buttonDisabledColor: '#cdcdcd',
  newMessageIndicator: '#007AFF',
  messageColor: '#8C8C8C',
  avatarBackground: '#CDCED2',
  underlayColor: '#E5E6EA',
  arrowIcon: '#CDCED2',
  textField: {
    subtitleColor: '#8C8C8C',
    iconColor: '#CDCED2',
  },
};

export default defaultTheme;
