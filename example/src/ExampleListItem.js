/* flow */
import * as React from 'react';

import { withTheme, RowItem, Icon } from 'react-native-ios-kit';
import type { Theme } from 'react-native-ios-kit/types';

type Props = {
  theme: Theme,
  onPressRow: (rowData: Route) => void,
  rowData: Route,
};

class ExampleLitItem extends React.PureComponent<Props> {
  render() {
    const { onPressRow, rowData } = this.props;

    return (
      <RowItem
        title={rowData.title}
        onPress={() => onPressRow(rowData)}
        withoutHeader
        withoutFooter
        rightComponent={<Icon name="ios-arrow-dropright" size={30} />}
      />
    );
  }
}

export default withTheme(ExampleLitItem);
