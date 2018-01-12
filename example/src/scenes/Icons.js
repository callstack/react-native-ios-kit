/* @flow */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { withTheme, TableView, InfoRow, Icon } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

class IconsExample extends Component<Props> {
  render() {
    const { theme: { primaryColor, positiveColor } } = this.props;
    return (
      <View style={styles.screen}>
        <View style={styles.row}>
          <Icon name="ios-chatbubbles-outline" />
          <Icon name="ios-bonfire-outline" color="red" size={24} />
          <Icon
            name={{
              uri:
                'https://callstack.github.io/react-native-ios-kit/img/favicon.png',
            }}
          />
          <Icon name="ios-checkmark-circle" color={positiveColor} />
        </View>
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
            icon={<Text style={{ color: primaryColor }}>Hi</Text>}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
