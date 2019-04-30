/* @flow */
import * as React from 'react';
import { StyleSheet, NavigatorIOS, StatusBar } from 'react-native';
import { ThemeProvider, DefaultTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import ExampleList from './src/ExampleList';
import ThemeSelector from './src/ThemeSelector';

type Props = {
  navigator: Object,
};

type State = {
  selectedTheme: Theme,
};

export default class App extends React.Component<Props, State> {
  state = {
    selectedTheme: DefaultTheme,
  };
  _nav: ?Object;
  openThemesScreen = () => {
    if (this._nav) {
      this._nav.push({
        component: ThemeSelector,
        title: 'Select Theme',
        passProps: {
          selectTheme: this.selectTheme,
          selectedTheme: this.state.selectedTheme,
        },
      });
    }
  };

  selectTheme = (theme: Theme) => {
    this.setState({ selectedTheme: theme });
    StatusBar.setBarStyle(
      theme === DefaultTheme ? 'dark-content' : 'light-content',
    );
  };

  render() {
    const { selectedTheme } = this.state;
    const {
      barColor,
      primaryColor,
      textColor,
      backgroundColor,
    } = selectedTheme;
    return (
      <ThemeProvider theme={selectedTheme}>
        <NavigatorIOS
          ref={ref => (this._nav = ref)}
          initialRoute={{
            component: ExampleList,
            title: 'Example',
            rightButtonTitle: 'Theme',
            onRightButtonPress: this.openThemesScreen,
            passProps: { theme: selectedTheme },
          }}
          style={styles.container}
          itemWrapperStyle={[styles.scene, { backgroundColor }]}
          barTintColor={barColor}
          tintColor={primaryColor}
          titleTextColor={textColor}
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
