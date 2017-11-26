/* @flow */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { TabBar, ThemeProvider } from 'react-native-ios-kit';

type State = {
  activeTab: number,
};

export default class TabBarExample extends Component<void, State> {
  state = {
    activeTab: 0,
  };

  selectTab = (tabIndex: number) => this.setState({ activeTab: tabIndex });

  render() {
    return (
      <ThemeProvider>
        <View style={styles.screen}>
          <View>
            <Text>{`Active Tab: ${this.state.activeTab}`}</Text>
          </View>
          <TabBar
            tabs={[
              {
                icon: 'ios-paper-outline',
                title: 'News',
                onPress: this.selectTab,
                active: this.state.activeTab === 0,
              },
              {
                icon: 'ios-podium',
                title: 'Scores',
                onPress: this.selectTab,
                active: this.state.activeTab === 1,
              },
              {
                icon: 'ios-star-outline',
                title: 'Favourites',
                onPress: this.selectTab,
                active: this.state.activeTab === 2,
              },
              {
                icon: 'ios-people',
                title: 'Disabled',
                onPress: this.selectTab,
                active: this.state.activeTab === 3,
                disabled: true,
              },
            ]}
          />
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
