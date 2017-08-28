import React from 'react';
import { StyleSheet, NavigatorIOS, Text } from 'react-native';
import { ThemeProvider } from 'react-native-ios-kit';

import ExampleList from './src/ExampleList';

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <NavigatorIOS
          initialRoute={{
            component: ExampleList,
            title: 'Example',
          }}
          style={styles.container}
          itemWrapperStyle={styles.scene}
        />
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    paddingTop: 64,
  },
});
