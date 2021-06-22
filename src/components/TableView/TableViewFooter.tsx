import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { withTheme } from '../../core/theming';
import { Footnote } from '../Typography';
import type { Theme } from '../../types/Theme';

type Props = {
  footer: string;
  theme: Theme;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

class TableViewFooter extends React.Component<Props> {
  renderFooter = () => {
    const { footer, theme, style, onPress } = this.props;
    return (
      <View
        style={[
          styles.footer,
          { backgroundColor: theme.footnoteBackgroundColor },
          style,
        ]}
      >
        <Footnote
          style={{ color: onPress ? theme.primaryColor : theme.footnoteColor }}
        >
          {footer}
        </Footnote>
      </View>
    );
  };

  renderTouchableFooter = () => (
    <TouchableHighlight onPress={this.props.onPress}>
      {this.renderFooter()}
    </TouchableHighlight>
  );

  render() {
    return this.props.onPress
      ? this.renderTouchableFooter()
      : this.renderFooter();
  }
}

export default withTheme(TableViewFooter);

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 15,
    paddingTop: 7,
    paddingBottom: 15,
  },
});
