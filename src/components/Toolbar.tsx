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

type ToolbarItem = {
  icon?: string,
  title?: string,
  onPress: (itemIndex: number) => void,
  disabled?: boolean,
};

type Props = {
  /**
   * Array of Items. Each ToolbarItem needs to have below shape:
   * icon: Icon name, one of https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json
   * title: string,
   * onPress: function to be called when Item is tapped
   * disabled?: boolean, (optional), diasables an Item
   */
  items: Array<ToolbarItem>,
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
};

class Toolbar extends PureComponent<Props> {
  render() {
    const {
      theme: { barColor, dividerColor, primaryColor, disabledColor },
      items,
    } = this.props;
    const toolbarStyle = {
      backgroundColor: barColor,
      borderTopColor: dividerColor,
    };
    const { width } = Dimensions.get('window');
    return (
      <View style={[styles.wrapper, toolbarStyle]}>
        {items.map((item, idx) => (
          <TouchableWithoutFeedback
            // eslint-disable-next-line
            key={`toolbarItem_${idx}`}
            onPress={() => item.onPress(idx)}
            disabled={item.disabled}
          >
            <View style={[styles.toolbarItem, { width: width / items.length }]}>
              {item.icon && (
                <Icon
                  name={item.icon}
                  size={30}
                  color={item.disabled ? disabledColor : primaryColor}
                />
              )}
              {item.title && (
                <Caption2
                  style={{
                    color: item.disabled ? disabledColor : primaryColor,
                  }}
                >
                  {item.title}
                </Caption2>
              )}
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    );
  }
}

export default withTheme(Toolbar);

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  toolbarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
});
