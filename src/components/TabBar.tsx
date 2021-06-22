import React, { PureComponent } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import Icon from './Icon';
import { Caption2 } from './Typography';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type TabItem = {
  icon?: string;
  title?: string;
  onPress: (tabIndex: number) => void;
  isActive?: boolean;
  disabled?: boolean;
};

type Props = {
  /**
   * Array of Tabs. Each TabItem needs to have below shape:
   * icon: Icon name, one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
   * title: string,
   * onPress: function to be called when Tab is tapped
   * isActive: boolean, indicating wheter Tab is active
   * disabled?: boolean, (optional), diasables a Tab
   */
  tabs: Array<TabItem>;
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme;
};

class TabBar extends PureComponent<Props> {
  render() {
    const {
      theme: {
        barColor,
        dividerColor,
        primaryColor,
        disabledColor,
        primaryLightColor,
      },
      tabs,
    } = this.props;
    const tabBarStyle = {
      backgroundColor: barColor,
      borderTopColor: dividerColor,
    };
    const { width } = Dimensions.get('window');
    return (
      <View style={[styles.wrapper, tabBarStyle]}>
        {tabs.map((tab, idx) => (
          <TouchableWithoutFeedback
            // eslint-disable-next-line
            key={`tabItem_${idx}`}
            onPress={() => tab.onPress(idx)}
            disabled={tab.disabled || tab.isActive}
          >
            <View style={[styles.tabItem, { width: width / tabs.length }]}>
              <Icon
                name={tab.icon}
                size={30}
                color={
                  tab.isActive
                    ? primaryColor
                    : tab.disabled
                    ? disabledColor
                    : primaryLightColor
                }
              />
              <Caption2
                style={{
                  color: tab.isActive
                    ? primaryColor
                    : tab.disabled
                    ? disabledColor
                    : primaryLightColor,
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
