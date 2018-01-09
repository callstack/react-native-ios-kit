/* @flow */
import * as React from 'react';
import { View } from 'react-native';

import TableViewHeader from './TableViewHeader';
import TableViewFooter from './TableViewFooter';
import { withTheme } from '../../';
import type { Theme } from '../../types/Theme';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
  /**
   * Header of TableView
   */
  header?: string,
  /**
   * Indicates whether render empty header or not
   */
  withoutHeader?: boolean,
  /**
   * Optional styles of header
   */
  headerStyle?: StyleObj,
  /**
   * Footer of TableView
   */
  footer?: string,
  /**
   * Whether render empty footer or not
   */
  withoutFooter?: boolean,
  /**
   * Footer style
   */
  footerStyle?: StyleObj,
  /**
   * onPress handler of Footer component
   */
  onFooterPress?: Function,
  /**
   * Children of TableView to render, e.g. RowItem's
   */
  children: React.ChildrenArray<*>,
};

class TableView extends React.Component<Props> {
  static defaultProps = {
    header: '',
    footer: '',
  };

  render() {
    const {
      header,
      children,
      footer,
      withoutHeader,
      withoutFooter,
      headerStyle,
      footerStyle,
      onFooterPress,
    } = this.props;
    return (
      <View>
        {!withoutHeader && (
          <TableViewHeader header={header} style={headerStyle} />
        )}
        {React.Children.map(children, (child, idx) =>
          React.cloneElement(child, {
            first: idx === 0,
            last: idx === React.Children.count(children) - 1,
          })
        )}
        {!withoutFooter && (
          <TableViewFooter
            footer={footer}
            onPress={onFooterPress}
            style={footerStyle}
          />
        )}
      </View>
    );
  }
}

export default withTheme(TableView);
