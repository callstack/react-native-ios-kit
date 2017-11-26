/* @flow */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { TabBar, withTheme, Headline } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit';

type Props = {
  theme: Theme,
};
type State = {
  activeTab: number,
};

class TabBarExample extends Component<Props, State> {
  state = {
    activeTab: 0,
  };

  selectTab = (tabIndex: number) => this.setState({ activeTab: tabIndex });

  render() {
    const { theme } = this.props;
    return (
      <View style={styles.screen}>
        <View>
          <Headline style={{ color: theme.text }}>
            {`Active Tab: ${this.state.activeTab}`}
          </Headline>
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
    );
  }
}

export default withTheme(TabBarExample);

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
