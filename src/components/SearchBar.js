/* @flow */
import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from './Icon';

import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
  /**
   * Callback that is called when the text input's text changes
   */
  onChangeText: (text: string) => void,
  /**
   * Placeholder of text input. Defaults to "Search"
   */
  placeholder: string,
  /**
   * Value of text input
   */
  value: string,
  /**
   * Indicates presence of Cancel button. Defaults to false
   */
  withCancel: boolean,
  /**
   * Indicates if Cancel button and TextInput should animate on focus/blur. Defaults to false
   */
  animated: boolean,
  /**
   * Animation duration. Default 400ms
   */
  animationTime: number,
};

class SearchBar extends React.Component<Props> {
  static defaultProps = {
    placeholder: 'Search',
    withCancel: false,
    animated: false,
    animationTime: 400,
  };
  _input = undefined;
  cancelInput = (): void => {
    this.props.onChangeText('');
    if (this._input) {
      this._input.blur();
    }
  };
  focusInput = (): void => {
    if (this._input) {
      this._input.focus();
    }
  };
  render() {
    const { value, placeholder, onChangeText, theme, withCancel } = this.props;
    return (
      <View style={[{ backgroundColor: theme.barColor }, styles.container]}>
        <TouchableHighlight
          underlayColor="rgb(161,161,161)"
          onPress={this.focusInput}
          onLongPress={this.focusInput}
          style={styles.inputTouchWrapper}
        >
          <View style={styles.inputWrapper}>
            <Icon
              name="ios-search"
              color="rgb(142,142,147)"
              style={styles.searchIcon}
              size={18}
            />
            <TextInput
              ref={ref => (this._input = ref)}
              style={styles.input}
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              clearButtonMode="always"
              placeholderTextColor="rgb(142,142,147)"
              selectionColor={theme.buttonColor} //FIXME: shoul be primaryColor!
              {...this.props}
            />
          </View>
        </TouchableHighlight>
        {withCancel && (
          <TouchableOpacity onPress={this.cancelInput}>
            <Text style={[{ color: theme.buttonColor }, styles.cancelText]}>
              Cancel
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

export default withTheme(SearchBar);

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    paddingLeft: 9,
    backgroundColor: 'transparent',
    marginTop: 2,
  },
  inputTouchWrapper: {
    flexGrow: 1,
    borderRadius: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgb(236,236,237)',
    paddingBottom: 5,
    paddingTop: 3,
    borderRadius: 10,
    flexGrow: 1,
    height: 36,
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'transparent',
    paddingHorizontal: 7,
    fontSize: 16,
    flexGrow: 1,
  },
  cancelText: {
    fontSize: 16,
    paddingHorizontal: 7,
  },
});
