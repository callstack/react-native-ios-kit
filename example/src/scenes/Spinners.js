/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import {
  withTheme,
  Spinner,
  ProgressBar,
  Title1,
  DefaultTheme,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  progress: number,
};

class Spinners extends Component<Props, State> {
  state = {
    progress: 0,
  };
  componentDidMount() {
    this.animateProgress();
  }
  componentWillUnmount() {
    clearTimeout(this.animate);
  }

  animate: TimeoutID;

  animateProgress = () => {
    this.animate = setTimeout(() => {
      if (this.state.progress < 1) {
        this.setState(
          state => ({ progress: state.progress + 0.1 }),
          this.animateProgress,
        );
      } else {
        this.setState({ progress: 0 }, this.animateProgress);
      }
    }, 100);
  };

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.container}>
          <Title1>Spinner</Title1>
          <View style={styles.row}>
            <Spinner />
          </View>
          <View style={styles.row}>
            <Spinner
              theme={{ ...DefaultTheme, primaryColor: 'red' }}
              size="large"
            />
          </View>
        </View>
        <View style={styles.container}>
          <Title1 style={{ marginBottom: 25 }}>ProgressBar</Title1>
          <ProgressBar progress={this.state.progress} />
        </View>
      </View>
    );
  }
}

export default withTheme(withSafeArea(Spinners));

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  row: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
  },
});
