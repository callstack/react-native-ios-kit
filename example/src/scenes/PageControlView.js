/* @flow */
import * as React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';

import { withTheme, PageControlView, Title1, Icon } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

const { height } = Dimensions.get('window');

class PageControlViewExample extends React.Component<Props> {
  render() {
    return (
      <PageControlView startPage={1} onPageChange={page => console.log(page)}>
        <View style={styles.firstContainer}>
          <Title1>First page.</Title1>
          <View style={styles.row}>
            <Icon
              style={{ paddingHorizontal: 20 }}
              name="ios-american-football-outline"
            />
            <Icon style={{ paddingHorizontal: 20 }} name="ios-cash-outline" />
            <Icon style={{ paddingHorizontal: 20 }} name="ios-bowtie-outline" />
            <Icon style={{ paddingHorizontal: 20 }} name="ios-cloudy-night" />
            <Icon
              style={{ paddingHorizontal: 20 }}
              name="ios-construct-outline"
            />
            <Icon
              style={{ paddingHorizontal: 20 }}
              name="ios-game-controller-b-outline"
            />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.secondContainer}>
          <Title1>ScrollView child component.</Title1>
        </ScrollView>
        <View style={styles.thirdContainer}>
          <Title1>Third page.</Title1>
        </View>
      </PageControlView>
    );
  }
}

export default withTheme(withSafeArea(PageControlViewExample));

const styles = StyleSheet.create({
  firstContainer: {
    flexGrow: 1,
    paddingTop: 20,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  secondContainer: {
    flexGrow: 1,
    backgroundColor: '#007aff',
    paddingTop: 20,
    alignItems: 'center',
    height: 2 * height,
  },
  thirdContainer: {
    flexGrow: 1,
    backgroundColor: '#ff9500',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
