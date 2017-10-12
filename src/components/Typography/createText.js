/**
 * @flow
 */
import React from 'react';
import StyledText from './StyledText';

type Config = {
  fontSize: number,
  tracking: number,
  leading: number,
  fontWeight: string,
};

const createText = (config: Config) => {
  return (props: Object) => <StyledText {...props} config={config} />;
};

export default createText;
