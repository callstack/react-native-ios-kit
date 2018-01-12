/* @flow */
import * as React from 'react';
import { ScrollView } from 'react-native';

import {
  Button,
  CheckboxRow,
  Icon,
  InfoRow,
  NavigationRow,
  RowItem,
  SwitchRow,
  TableView,
  TextFieldRow,
  withTheme,
} from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';
import withSafeArea from '../withSafeArea';

type Props = {
  theme: Theme,
};
type State = {
  checkboxSelected: boolean,
  switchSelected: boolean,
  textFieldValue: string,
};
class TableViewExample extends React.Component<Props, State> {
  state = {
    checkboxSelected: true,
    switchSelected: true,
    textFieldValue: '',
  };
  render() {
    return (
      <ScrollView>
        <TableView header="RowItems" footer="footer">
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
        <TableView footer="Footer link" onFooterPress={() => alert('Hello')}>
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
        <TableView header="Rows">
          <TextFieldRow
            title="TextFieldRow"
            value={this.state.textFieldValue}
            onValueChange={text => this.setState({ textFieldValue: text })}
          />
          <CheckboxRow
            selected={this.state.checkboxSelected}
            onPress={() =>
              this.setState(state => ({
                checkboxSelected: !state.checkboxSelected,
              }))
            }
            title="CheckobxRow"
            subtitle="Selectable row"
          />
          <InfoRow title="InfoRow" info="1" />
          <SwitchRow
            title="SwitchRow"
            value={this.state.switchSelected}
            onValueChange={value => this.setState({ switchSelected: value })}
          />
          <NavigationRow
            title="NavigationRow"
            onPress={() => alert('NavigationRow pressed')}
            info="navigation"
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
