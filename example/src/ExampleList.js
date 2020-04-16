/* @flow */

import * as React from 'react';
import { FlatList } from 'react-native';
import { useTheme, NavigationRow } from 'react-native-ios-kit';
import { useSafeArea } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import Buttons from './scenes/Buttons';
import Avatars from './scenes/Avatars';
import Typography from './scenes/Typography';
import TabBar from './scenes/TabBar';
import Toolbar from './scenes/Toolbar';
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
import GroupedList from './scenes/GroupedList';
import Collection from './scenes/Collection';
import Spinners from './scenes/Spinners';

type Route = {
  component: any,
  title: string,
};

export const examples = [
  {
    component: Avatars,
    title: 'Avatars',
  },
  {
    component: Buttons,
    title: 'Buttons',
  },
  {
    component: GroupedList,
    title: 'GroupedList',
  },
  {
    component: Collection,
    title: 'Collection',
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
    component: Spinners,
    title: 'Spinners',
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
    component: Toolbar,
    title: 'Toolbar',
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
];

type Props = {
  navigation: StackNavigationProp<{}>,
};

export default function ExampleList({ navigation }: Props) {
  const theme = useTheme();
  const safeArea = useSafeArea();

  const _onPressRow = (route: Route) => {
    navigation.navigate(route.title);
  };

  return (
    <FlatList
      data={examples}
      renderItem={({ item }) => (
        <NavigationRow title={item.title} onPress={() => _onPressRow(item)} />
      )}
      keyExtractor={item => item.title}
      contentContainerStyle={{
        paddingBottom: safeArea.bottom,
        backgroundColor: theme?.backgroundColor,
      }}
    />
  );
}
