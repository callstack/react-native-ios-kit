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
} from '../../../src';

export default class TypographyExample extends Component<void> {
  render() {
    return (
      <View style={styles.container}>
        <Title1>Title 1</Title1>
        <Title2>Title2</Title2>
        <Title3>Title3</Title3>
        <Headline>Headline</Headline>
        <Body>Body</Body>
        <Callout>Callout</Callout>
        <Subhead>Subhead</Subhead>
        <Footnote>Footnote</Footnote>
        <Caption1>Caption1</Caption1>
        <Caption2>Caption2</Caption2>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 48,
  },
});
