import React from 'react';
import { View, StyleSheet } from 'react-native';

import { withTheme } from '../../core/theming';
import { Footnote } from '../Typography';
import { Theme } from '../../types/Theme';
import { ViewStyle, StyleProp } from 'react-native';

type Props = {
  header: string;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
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
