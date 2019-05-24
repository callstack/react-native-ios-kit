/* @flow */

import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';

import { Card, Subhead, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

class Cards extends Component<Props> {
  handleCardPress = () => {
    Alert.alert('handleCardPress');
  };

  render() {
    const overlay = require('../../assets/wallpaper.jpg');

    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={overlay}
      >
        <ScrollView style={styles.container}>
          <Card
            icon="ios-map"
            title="maps nearby"
            content={<Subhead>Content of the card</Subhead>}
            expandedContent={<ExpandedContent />}
            onPress={this.handleCardPress}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default withTheme(withSafeArea(Cards));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
});

const ExpandedContent = () => (
  <View>
    <Subhead>Content of the card</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
  </View>
);
