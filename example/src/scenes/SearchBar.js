/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme, SearchBar } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  text: string,
};

class SearchBarExample extends Component<Props, State> {
  state = {
    text: '',
  };
  render() {
    return (
      <View style={styles.screen}>
        <SearchBar
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          withCancel
          animated
        />
      </View>
    );
  }
}

export default withTheme(withSafeArea(SearchBarExample));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
