import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  theme: Theme;
  animating: boolean;
  size?: 'small' | 'large' | number;
  hidesWhenStopped: boolean;
};

class Spinner extends Component<Props> {
  static defaultProps: Partial<Props> = {
    animating: true,
    size: 'small' as const,
    hidesWhenStopped: true,
  };
  render() {
    const {
      animating,
      size,
      hidesWhenStopped,
      theme: { primaryColor },
    } = this.props;
    return (
      <ActivityIndicator
        animating={animating}
        size={size}
        hidesWhenStopped={hidesWhenStopped}
        color={primaryColor}
      />
    );
  }
}

export default withTheme(Spinner);
