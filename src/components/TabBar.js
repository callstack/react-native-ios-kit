/* @flow */
import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Icon from './Icon';
import { Caption2 } from './Typography';
import { withTheme } from '../';
import type { Theme } from '../types/Theme';

type TabItem = {
  icon: string,
  title: string,
  onPress: (tabIndex: number) => void,
  active: boolean,
  badge?: boolean,
  disabled?: boolean,
};

type Props = {
  /**
   * Array of Tabs. Each TabItem needs to have below shape:
   * icon: Icon name, one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
   * title: string,
   * onPress: function to be called when Tab is tapped
   * active: boolean, indicating wheter Tab is active
   * badge?: boolean, (optional), indicationg if Tab have badge
   * disabled?: boolean, (optional), diasables a Tab
   */
  tabs: Array<TabItem>,
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
};

class TabBar extends PureComponent<Props> {
  render() {
    const { theme, tabs } = this.props;
    const tabBarStyle = {
      backgroundColor: theme.phoneFieldBackground,
      borderTopColor: theme.borderColor,
    };
    const activeColor = theme.buttonColor;
    // FIXME:
    // const inactiveColor = theme.buttonDisabledColor;
    const inactiveColor = '#929292';
    return (
      <View style={[styles.wrapper, tabBarStyle]}>
        {tabs.map((tab, idx) => (
          <TouchableWithoutFeedback
            key={`tabItem_${idx}`}
            onPress={() => tab.onPress(idx)}
            disabled={tab.disabled || tab.active}
          >
            <View style={styles.tabItem}>
              <Icon
                name={tab.icon}
                theme={theme}
                size={30}
                color={tab.active ? activeColor : inactiveColor}
              />
              <Caption2
                style={{
                  color: tab.active ? activeColor : inactiveColor,
                }}
              >
                {tab.title}
              </Caption2>
              {tab.badge && <View style={styles.badge} />}
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'red',
  },
});
