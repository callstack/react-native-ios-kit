/* @flow */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { SegmentedControl, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
};
type State = {
  selectedIndex: number,
  selectedValue: string,
};
class SegmentedExample extends Component<Props, State> {
  state = {
    selectedIndex: 0,
    selectedValue: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControl
          values={['One', 'Two', 'Three']}
          selectedIndex={this.state.selectedIndex}
          onChange={index => this.setState({ selectedIndex: index })}
          onValueChange={value =>
            this.setState({
              selectedValue: value,
            })
          }
          style={{ width: 222, alignSelf: 'center' }}
        />
      </View>
    );
  }
}

export default withTheme(SegmentedExample);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
