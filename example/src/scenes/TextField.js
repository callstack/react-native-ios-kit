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
  password: string,
};
class TextFieldExample extends React.Component<Props, State> {
  state = {
    phone: '',
    email: '',
    password: '',
  };
  render() {
    return (
      <View>
        <TextField
          placeholder={'Phone number'}
          value={this.state.phone}
          onValueChange={phone => this.setState({ phone })}
        />
        <TextField
          placeholder={'Email'}
          value={this.state.email}
          onValueChange={email => this.setState({ email })}
        />
        <TextField
          placeholder={'Password'}
          value={this.state.password}
          onValueChange={password => this.setState({ password })}
          secureTextEntry
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(TextFieldExample));
