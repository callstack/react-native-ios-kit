/* @flow */
import * as React from 'react';
import { ScrollView } from 'react-native';

import {
  TableView,
  withTheme,
  RowItem,
  Icon,
  Button,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};

class TableViewExample extends React.Component<Props> {
  render() {
    return (
      <ScrollView>
        <TableView header="Header" footer="footer...">
          <RowItem
            icon="ios-map-outline"
            title="Navigation"
            subtitle="Get your directions"
            rightComponent={ArrowRight}
            onPress={() => alert('Hello')}
          />
          <RowItem
            icon="ios-settings"
            title="Settings"
            onPress={() => alert('Hello')}
          />
        </TableView>
        <TableView footer="PrivacyPolicy" onFooterPress={() => alert('Hello')}>
          <RowItem title="No Icon" />
          <RowItem
            icon="ios-heart-outline"
            title="Health"
            rightComponent={ArrowRight}
            onPress={() => alert('Hello')}
          />
        </TableView>
        <TableView withoutHeader withoutFooter>
          <RowItem
            title="No header, no footer"
            rightComponent={RightButton}
            onPress={() => alert('Hello')}
          />
        </TableView>
      </ScrollView>
    );
  }
}

export default withTheme(withSafeArea(TableViewExample));

const ArrowRight = <Icon name="ios-arrow-forward" size={22} />;
const RightButton = (
  <Button onPress={() => alert('Hello world!')}>{ArrowRight}</Button>
);
