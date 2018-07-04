/* @flow */
import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import RowItem from './RowItem';
import Icon from './Icon';
import withTheme from '../core/withTheme';
import { Body } from './Typography';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  onPress: void => void,
  info?: string,
};

class NavigationRow extends React.Component<Props> {
  renderRightComponent = () => {
    const { info, theme: { placeholderColor } } = this.props;
    return (
      <View style={styles.row}>
        {info ? (
          <Body style={{ color: placeholderColor, paddingRight: 10 }}>
            {info}
          </Body>
        ) : null}
        <Icon name="ios-arrow-forward" size={20} color={placeholderColor} style={{ marginTop: 4 }}/>
      </View>
    );
  };
  render() {
    const { onPress } = this.props;
    return (
      <RowItem
        onPress={onPress}
        renderRight={this.renderRightComponent}
        {...this.props}
      />
    );
  }
}

export default withTheme(NavigationRow);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
