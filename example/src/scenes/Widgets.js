/* @flow */
import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
} from 'react-native';
import { Widget, Subhead, withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

const overlay = require('../../assets/wallpaper.jpg');

type Props = {
  theme: Theme,
};

class Widgets extends Component<Props> {
  handleCardPress = () => {
    Alert.alert('handleCardPress');
  };

  render() {
    return (
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={overlay}
      >
        <ScrollView style={styles.container}>
          <Widget
            icon="ios-map"
            title="maps nearby"
            content={<Subhead>Content of the Widget</Subhead>}
            expandedContent={<ExpandedContent />}
            onPress={this.handleCardPress}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default withTheme(Widgets);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 15,
  },
});

const ExpandedContent = () => (
  <View>
    <Subhead>Content of the Widget</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
    <Subhead>Expaned Content</Subhead>
  </View>
);
