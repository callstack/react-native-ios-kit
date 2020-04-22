/* @flow */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import color from 'color';
import {
  withTheme,
  PageControl,
  Subhead,
  DefaultTheme,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  currentPage: number,
};

class PageControlExample extends React.Component<Props, State> {
  state = { currentPage: 2 };
  render() {
    const { currentPage } = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.row}>
          <Subhead>currentPage={currentPage}</Subhead>
          <Subhead>numberOfPages={5}</Subhead>
          <PageControl
            currentPage={currentPage}
            numberOfPages={5}
            updateCurrentPageDisplay={page =>
              this.setState({ currentPage: page })
            }
          />
        </View>
        <View style={styles.row}>
          <Subhead>numberOfPages={1}</Subhead>
          <PageControl currentPage={currentPage} numberOfPages={1} />
        </View>
        <View style={styles.row}>
          <Subhead>numberOfPages={1}</Subhead>
          <Subhead>hidesForSinglePage</Subhead>
          <PageControl
            currentPage={currentPage}
            numberOfPages={1}
            hidesForSinglePage
          />
        </View>
        <View style={styles.row}>
          <Subhead>with custom Theme</Subhead>
          <PageControl
            numberOfPages={3}
            currentPage={1}
            theme={{
              ...DefaultTheme,
              barColor: '#007aff',
              dividerColor: color('#007aff').lighten(0.5).toString(),
            }}
          />
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(PageControlExample));

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
  },
  row: {
    padding: 20,
    borderBottomColor: '#333',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
