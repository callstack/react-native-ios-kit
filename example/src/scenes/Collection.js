/* @flow */
import * as React from 'react';
import { Image } from 'react-native';
import { Collection, withTheme, Title1 } from 'react-native-ios-kit';

import withSafeArea from '../withSafeArea';
import type { Theme } from 'react-native-ios-kit/types';

const imagesPrefix = 'https://picsum.photos/';
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const data = months.map(month => ({
  data: [...Array(Math.floor(Math.random() * 15) + 2)].map(
    () => `${imagesPrefix}${Math.floor(Math.random() * 100) + 200}`
  ),
  title: month,
}));

type Props = {
  theme: Theme,
};

type State = {
  refreshing: boolean,
};
class CollectionExample extends React.Component<Props, State> {
  state = {
    refreshing: false,
  };
  refresh = () => {
    this.setState({ refreshing: true }, () => {
      setTimeout(() => this.setState({ refreshing: false }), 1000);
    });
  };

  render() {
    return (
      <Collection
        numberOfColumns={4}
        data={data}
        renderItem={item => <Image source={{ uri: item }} />}
        renderSectionHeader={({ section }) => <Title1>{section.title}</Title1>}
        keyExtractor={(item, index) => `${item}_${index}`}
        refreshing={this.state.refreshing}
        onRefresh={this.refresh}
      />
    );
  }
}

export default withTheme(withSafeArea(CollectionExample));
