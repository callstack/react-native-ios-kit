/* @flow */
import * as React from 'react';
import { Image } from 'react-native';
import { Collection, withTheme, Title1 } from 'react-native-ios-kit';

import withSafeArea from '../withSafeArea';
import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
};

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

class CollectionExample extends React.Component<Props> {
  render() {
    return (
      <Collection
        numberOfColumns={4}
        data={data}
        renderItem={uri => <Image source={{ uri }} style={{}} />}
        renderSectionHeader={({ section }) => <Title1>{section.title}</Title1>}
        keyExtractor={(item, index) => `${item}_${index}`}
      />
    );
  }
}

export default withTheme(withSafeArea(CollectionExample));
