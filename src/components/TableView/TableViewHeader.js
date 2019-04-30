/* @flow */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme } from '../../core/theming';
import { Footnote } from '../Typography';
import type { Theme } from '../../types/Theme';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = {
  header: string,
  theme: Theme,
  style?: TextStyleProp,
};

class TableViewHeader extends React.Component<Props> {
  render() {
    const { header, theme, style } = this.props;
    return (
      <View
        style={[
          styles.header,
          { backgroundColor: theme.footnoteBackgroundColor },
          style,
        ]}
      >
        <Footnote style={{ color: theme.footnoteColor }}>
          {header.toUpperCase()}
        </Footnote>
      </View>
    );
  }
}

export default withTheme(TableViewHeader);

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 7,
  },
});
