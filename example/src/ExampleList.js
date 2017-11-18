/* @flow */

import React, { Component } from 'react';
import { ListView, TouchableHighlight, StyleSheet, Text } from 'react-native';

import Buttons from './scenes/Buttons';
import Typography from './scenes/Typography';
import TabBar from './scenes/TabBar';

type Route = {
  /* eslint-disable react/no-unused-prop-types */
  component: any,
  title: string,
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithRows([
  {
    component: Buttons,
    title: 'Buttons',
  },
  {
    component: Typography,
    title: 'Typography',
  },
  {
    component: TabBar,
    title: 'TabBar',
  },
]);

type Props = {
  navigator: Object,
};

export default class ExampleList extends Component<Props> {
  _onPressRow = route => {
    this.props.navigator.push(route);
  };

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        renderRow={rowData => (
          <ListItem onPressRow={this._onPressRow} rowData={rowData} />
        )}
      />
    );
  }
}

type ListItemProps = {
  onPressRow: (rowData: Route) => void,
  rowData: Route,
};

const ListItem = (props: ListItemProps) => {
  const { onPressRow, rowData } = props;
  const _onPressRow = () => {
    onPressRow(rowData);
  };
  return (
    <TouchableHighlight
      onPress={_onPressRow}
      style={styles.row}
      underlayColor="#C8C7CC"
    >
      <Text style={styles.text}>{rowData.title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  row: {
    padding: 15,
  },
  text: {
    fontSize: 17,
  },
});
