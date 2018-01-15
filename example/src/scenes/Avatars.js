/* @flow */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Avatar, withTheme, Body } from 'react-native-ios-kit';

import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
};

class AvatarExample extends React.Component<Props> {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <Body>Default</Body>
          <Avatar />
        </View>
        <View style={styles.row}>
          <Body>Url prop</Body>
          <Avatar url="https://callstack.com/static/favicon.png" />
        </View>
        <View style={styles.row}>
          <Body>Initials</Body>
          <Avatar initials="CK" />
        </View>
        <View style={styles.row}>
          <Body>With onPress handler</Body>
          <Avatar
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIl1UiHXVbyY2UVAWE6aflhrlA7CN8BGv4Ej7lkWp0wnJtody"
            onPress={() => alert('Hello')}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(AvatarExample);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
