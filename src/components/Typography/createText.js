/**
 * @flow
 */
import React from 'react';
import StyledText from './StyledText';

export type TConfig = {
  fontSize: number,
  tracking: number,
  leading: number,
  fontWeight: string,
};

const createText = (config: TConfig) => {
  return (props: Object) => (
    <StyledText
      {...props}
      config={config}
    />
  );
};

export default createText;