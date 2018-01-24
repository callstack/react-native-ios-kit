/* @flow */

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { withTheme, NavigationRow } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

import withSafeArea from './withSafeArea';
import Buttons from './scenes/Buttons';
import Avatars from './scenes/Avatars';
import Typography from './scenes/Typography';
import TabBar from './scenes/TabBar';
import PageControl from './scenes/PageControl';
import PageControlView from './scenes/PageControlView';
import Stepper from './scenes/Stepper';
import SearchBar from './scenes/SearchBar';
import Switch from './scenes/Switch';
import SegmentedControl from './scenes/SegmentedControl';
import TableView from './scenes/TableView';
import Slider from './scenes/Slider';
import TextField from './scenes/TextField';
import Icons from './scenes/Icons';

type Route = {
  component: any,
  title: string,
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithRows([
  {
    component: Avatars,
    title: 'Avatars',
  },
  {
    component: Buttons,
    title: 'Buttons',
  },
  {
    component: Icons,
    title: 'Icons',
  },
  {
    component: PageControl,
    title: 'PageControl',
  },
  {
    component: PageControlView,
    title: 'PageControlView',
  },
  {
    component: SearchBar,
    title: 'SearchBar',
  },
  {
    component: SegmentedControl,
    title: 'SegmentedControl',
  },
  {
    component: Slider,
    title: 'Slider',
  },
  {
    component: Stepper,
    title: 'Stepper',
  },
  {
    component: Switch,
    title: 'Switch',
  },
  {
    component: TabBar,
    title: 'TabBar',
  },
  {
    component: TableView,
    title: 'TableView',
  },
  {
    component: TextField,
    title: 'TextField',
  },
  {
    component: Typography,
    title: 'Typography',
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
          <NavigationRow
            title={rowData.title}
            onPress={() => this._onPressRow(rowData)}
          />
        )}
      />
    );
  }
}

export default withTheme(withSafeArea(ExampleList));
