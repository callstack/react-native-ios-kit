/* flow */
import * as React from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import { withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
  onPressRow: (rowData: Route) => void,
  rowData: Route,
};

class ExampleLitItem extends React.PureComponent<Props> {
  render() {
    const { onPressRow, rowData, theme: { text } } = this.props;

    return (
      <TouchableHighlight
        onPress={() => onPressRow(rowData)}
        style={styles.row}
        underlayColor="#C8C7CC"
      >
        <Text style={[styles.text, { color: text }]}>{rowData.title}</Text>
      </TouchableHighlight>
    );
  }
}

export default withTheme(ExampleLitItem);

const styles = StyleSheet.create({
  row: {
    padding: 15,
  },
  text: {
    fontSize: 17,
  },
});
