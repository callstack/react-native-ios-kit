/* @flow */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { withTheme, TableView, InfoRow } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

class IconsExample extends Component<Props> {
  render() {
    const { theme: { primaryColor } } = this.props;
    return (
      <View style={styles.screen}>
        <TableView header="Ionicons">
          <InfoRow icon="ios-appstore-outline" info="Default" />
          <InfoRow
            icon="ios-beer-outline"
            info="CustomColor"
            theme={{ primaryColor: 'plum' }}
          />
        </TableView>
        <TableView header="Custom image">
          <InfoRow
            icon={{
              uri:
                'https://callstack.github.io/react-native-ios-kit/img/favicon.png',
            }}
            info="Default"
          />
        </TableView>
        <TableView header="React component">
          <InfoRow
            icon={
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 22,
                  borderColor: primaryColor,
                  borderWidth: 1,
                }}
              />
            }
            info="<View />"
          />
          <InfoRow
            icon={<Text style={{ color: primaryColor }}>Hello</Text>}
            info="<Text />"
          />
        </TableView>
      </View>
    );
  }
}

export default withTheme(withSafeArea(IconsExample));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
