/* @flow */
import React from 'react';
import { StyleSheet, NavigatorIOS } from 'react-native';
import { ThemeProvider, DefaultTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit';

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

  selectTheme = (theme: Object) => this.setState({ selectedTheme: theme });

  render() {
    const { selectedTheme } = this.state;
    const { barColor, buttonColor, text, phoneFieldBackground } = selectedTheme;
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
          itemWrapperStyle={[
            styles.scene,
            { backgroundColor: phoneFieldBackground },
          ]}
          barTintColor={barColor}
          tintColor={buttonColor}
          titleTextColor={text}
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
