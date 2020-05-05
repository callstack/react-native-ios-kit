/**
 * @flow
 */
import React from 'react';
import { TextStyle } from 'react-native';
import StyledText from './StyledText';

export type Config = {
  fontSize: number;
  tracking: number;
  fontWeight: TextStyle['fontWeight'];
  leading: TextStyle['lineHeight'];
};
type Props = {
  children?: React.ReactNode;
  style?:  TextStyle;
}
const createText = (config: Config) => (props: Props) => (
  <StyledText {...props} config={config} />
);

export default createText;
