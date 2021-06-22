import * as React from 'react';
import type { TextStyle, StyleProp } from 'react-native';
import StyledText from './StyledText';

export type Config = {
  fontSize: number;
  tracking: number;
  fontWeight: TextStyle['fontWeight'];
  leading: TextStyle['lineHeight'];
};
type Props = {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
};
const createText = (config: Config) => (props: Props) => (
  <StyledText {...props} config={config} />
);

export default createText;
