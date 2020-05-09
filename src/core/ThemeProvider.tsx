import * as React from 'react';
import { ThemeProvider } from './theming';
import { Theme } from '../types/Theme';

type Props = {
  children: React.ReactNode;
  theme?: Theme;
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
