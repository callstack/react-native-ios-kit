/* @flow */

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { withTheme } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from './withSafeArea';
import ExampleListItem from './ExampleListItem';
import Buttons from './scenes/Buttons';
import Typography from './scenes/Typography';
import TabBar from './scenes/TabBar';
import Stepper from './scenes/Stepper';
import SearchBar from './scenes/SearchBar';
import ToggleButton from './scenes/ToggleButton';
import SegmentedControl from './scenes/SegmentedControl';
import TableView from './scenes/TableView';
import TextField from './scenes/TextField';

type Route = {
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
  {
    component: Stepper,
    title: 'Stepper',
  },
  {
    component: SearchBar,
    title: 'SearchBar',
  },
  {
    component: ToggleButton,
    title: 'ToggleButton',
  },
  {
    component: SegmentedControl,
    title: 'SegmentedControl',
  },
  {
    component: TableView,
    title: 'TableView',
  },
  {
    component: TextField,
    title: 'TextField',
  },
]);

type Props = {
  navigator: Object,
  theme: Theme,
};

class ExampleList extends Component<Props> {
  _onPressRow = (route: Route) => {
    this.props.navigator.push(route);
  };

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        dataSource={dataSource}
        renderRow={rowData => (
          <ExampleListItem onPressRow={this._onPressRow} rowData={rowData} />
        )}
      />
    );
  }
}

export default withTheme(withSafeArea(ExampleList));
