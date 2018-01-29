/* @flow */
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { GroupedList, withTheme, Body } from 'react-native-ios-kit';

import withSafeArea from '../withSafeArea';
import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
  navigator: Object,
};

type Item = {
  id: number,
  name: string,
  group: string,
};

type State = {
  data: Array<Item>,
  sections: Array<string>,
};

class AvatarExample extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const mockedData = [...new Array(200)].map((val, idx) => {
      const group = `${idx % 40}`;
      const name = `${group} name`;
      return { key: idx, name, group };
    });

    const mockedSections = [...new Array(40)].map((i, idx) => idx.toString());

    this.state = {
      data: mockedData,
      sections: mockedSections,
    };
  }

  state = {
    data: [],
    sections: [],
  };

  groupBy = (item: Item) => item.group;

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Body>{item.name}</Body>
    </View>
  );

  render() {
    return (
      <View>
        <GroupedList
          items={this.state.data}
          sections={this.state.sections}
          renderItem={this.renderItem}
          groupBy={this.groupBy}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default withTheme(withSafeArea(AvatarExample));
