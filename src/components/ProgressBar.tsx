import React, { Component } from 'react';
import { ProgressViewIOS } from 'react-native';

import { Theme } from '../types/Theme';
import { withTheme } from '../';

type Props = {
  theme: Theme;
  progress: number;
};

class ProgressBar extends Component<Props> {
  render() {
    const {
      progress,
      theme: { primaryColor },
    } = this.props;
    return (
      <ProgressViewIOS progress={progress} progressTintColor={primaryColor} />
    );
  }
}

export default withTheme(ProgressBar);
