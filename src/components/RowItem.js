/* @flow */
import * as React from 'react';
import { View, StyleSheet, TouchableHighlight } from 'react-native';

import Icon from './Icon';
import { Body, Caption1 } from './Typography/Typography';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
  /**
   * Icon name
   */
  icon?: string,
  /**
   * Title string to be displayed
   */
  title: string,
  /**
   * Optional subtitle string
   */
  subtitle?: string,
  /**
   * Right Component
   */
  rightComponent?: React.Element<*>,
  /**
   * RowItem's onPress handler
   */
  onPress?: Function,
  /**
   * Internal props
   */
  first: boolean,
  last: boolean,
};

class RowItem extends React.Component<Props> {
  static defaulProps = {
    rightComponent: null,
  };

  renderRow = () => {
    const {
      icon,
      title,
      subtitle,
      theme,
      rightComponent,
      first,
      last,
    } = this.props;
    return (
      <View
        style={[
          styles.row,
          {
            backgroundColor: theme.barColor,
            borderTopWidth: first ? StyleSheet.hairlineWidth : 0,
            borderBottomWidth: last ? StyleSheet.hairlineWidth : 0,
            borderColor: theme.footnoteColor,
          },
        ]}
      >
        {icon && <Icon name={icon} size={30} color={theme.primaryColor} />}
        <View style={[styles.titleWrapper, { marginLeft: icon ? 15 : 0 }]}>
          <Body>{title}</Body>
          {subtitle && <Caption1>{subtitle}</Caption1>}
        </View>
        {rightComponent}
      </View>
    );
  };

  renderTouchableRow = () => {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        underlayColor={this.props.theme.footnoteColor}
        style={{ backgroundColor: this.props.theme.barColor }}
      >
        {this.renderRow()}
      </TouchableHighlight>
    );
  };

  render() {
    const { last, onPress, theme, icon } = this.props;
    return (
      <View style={{ backgroundColor: theme.barColor }}>
        {onPress ? this.renderTouchableRow() : this.renderRow()}
        {!last && (
          <View
            style={[
              styles.separator,
              {
                backgroundColor: theme.footnoteColor,
                marginLeft: icon ? 54 : 15,
              },
            ]}
          />
        )}
      </View>
    );
  }
}

export default withTheme(RowItem);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    minHeight: 43,
  },
  titleWrapper: {
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});
