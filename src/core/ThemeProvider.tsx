/* @flow */
import * as React from 'react';
import { ThemeProvider } from './theming';
import type { Theme } from '../types/Theme';

type Props = {
  children: React.Node,
  theme?: $Shape<Theme>,
};

export default class Provider extends React.Component<Props> {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>
        {this.props.children}
      </ThemeProvider>
    );
  }
}
