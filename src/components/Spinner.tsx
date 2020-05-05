/* @flow */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import type { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  theme: Theme,
  animating: boolean,
  size: 'small' | 'large',
  hidesWhenStopped: boolean,
};

class Spinner extends Component<Props> {
  static defaultProps = {
    animating: true,
    size: 'small',
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
