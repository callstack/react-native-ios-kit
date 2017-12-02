/* @flow */
import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import Icon from './Icon';
import { Caption2 } from './Typography';
import { withTheme } from '../';
import type { Theme } from '../types/Theme';

type TabItem = {
  icon: string,
  title: string,
  onPress: (tabIndex: number) => void,
  isActive: boolean,
  disabled?: boolean,
};

type Props = {
  /**
   * Array of Tabs. Each TabItem needs to have below shape:
   *
   * icon: Icon name, one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
   *
   * title: string,
   *
   * onPress: function to be called when Tab is tapped
   *
   * isActive: boolean, indicating wheter Tab is active
   *
   * disabled?: boolean, (optional), disables a Tab
   */
  tabs: Array<TabItem>,
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
};
/**
 * A control that displays one or more buttons in a tab bar for selecting between different subtasks, views, or modes in an app.
 *
 * Usage:
 * ```js
 * <TabBar
 *  tabs={[
 *  {
 *      icon: 'ios-paper-outline',
 *      title: 'News',
 *      onPress: this.selectTab,
 *      isActive: this.state.activeTab === 0,
 *    },
 *    {
 *      icon: 'ios-podium',
 *      title: 'Scores',
 *      onPress: this.selectTab,
 *      isActive: this.state.activeTab === 1,
 *    },
 *    {
 *      icon: 'ios-star-outline',
 *      title: 'Favourites',
 *      onPress: this.selectTab,
 *      isActive: this.state.activeTab === 2,
 *    },
 *    {
 *      icon: 'ios-people',
 *      title: 'Disabled',
 *      onPress: this.selectTab,
 *      isActive: this.state.activeTab === 3,
 *      disabled: true,
 *    },
 *  ]}
 * />
 * ```
 */
class TabBar extends PureComponent<Props> {
  render() {
    const { theme, tabs } = this.props;
    const tabBarStyle = {
      backgroundColor: theme.barColor,
      borderTopColor: theme.borderColor,
    };
    const activeColor = theme.buttonColor;
    const inactiveColor = theme.buttonDisabledColor;
    const { width } = Dimensions.get('window');
    return (
      <View style={[styles.wrapper, tabBarStyle]}>
        {tabs.map((tab, idx) => (
          <TouchableWithoutFeedback
            key={`tabItem_${idx}`}
            onPress={() => tab.onPress(idx)}
            disabled={tab.disabled || tab.isActive}
          >
            <View style={[styles.tabItem, { width: width / tabs.length }]}>
              <Icon
                name={tab.icon}
                size={30}
                color={tab.isActive ? activeColor : inactiveColor}
              />
              <Caption2
                style={{
                  color: tab.isActive ? activeColor : inactiveColor,
                }}
              >
                {tab.title}
              </Caption2>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

export default withTheme(TabBar);

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
});
