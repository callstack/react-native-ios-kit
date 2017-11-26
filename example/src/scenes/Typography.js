/* @flow */
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import {
  Title1,
  Title2,
  Title3,
  Headline,
  Body,
  Callout,
  Subhead,
  Footnote,
  Caption1,
  Caption2,
  withTheme,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit';

type Props = {
  theme: Theme,
};

class TypographyExample extends Component<Props> {
  render() {
    const { theme: { text } } = this.props;
    return (
      <View style={styles.container}>
        <Title1 style={{ color: text }}>Title 1</Title1>
        <Title2 style={{ color: text }}>Title2</Title2>
        <Title3 style={{ color: text }}>Title3</Title3>
        <Headline style={{ color: text }}>Headline</Headline>
        <Body style={{ color: text }}>Body</Body>
        <Callout style={{ color: text }}>Callout</Callout>
        <Subhead style={{ color: text }}>Subhead</Subhead>
        <Footnote style={{ color: text }}>Footnote</Footnote>
        <Caption1 style={{ color: text }}>Caption1</Caption1>
        <Caption2 style={{ color: text }}>Caption2</Caption2>
      </View>
    );
  }
}

export default withTheme(TypographyExample);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 48,
  },
});
