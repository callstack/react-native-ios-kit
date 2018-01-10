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
  value: string,
};
class TextFieldExample extends React.Component<Props, State> {
  state = {
    value: '',
  };
  render() {
    return (
      <View>
        <TextField
          placeholder={'Bananas'}
          value={this.state.value}
          onChangeText={text => this.setState({ value: text })}
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(TextFieldExample));
