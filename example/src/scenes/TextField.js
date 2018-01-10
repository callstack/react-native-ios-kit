/* @flow */
import * as React from 'react';
import { View } from 'react-native';

import { TextField, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  phone: string,
  email: string,
};
class TextFieldExample extends React.Component<Props, State> {
  state = {
    phone: '',
    email: '',
  };
  render() {
    return (
      <View>
        <TextField
          placeholder={'Phone number'}
          value={this.state.phone}
          onChangeText={text => this.setState({ phone: text })}
        />
        <TextField
          placeholder={'Email'}
          value={this.state.email}
          onChangeText={text => this.setState({ email: text })}
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(TextFieldExample));
