import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function withSafeArea(WrappedComponent) {
  return class WithSafeArea extends Component {
    render() {
      return (
        <SafeAreaView style={styles.safeView}>
          <WrappedComponent {...this.props} />
        </SafeAreaView>
      );
    }
  };
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});
