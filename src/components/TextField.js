/* @flow */
import * as React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { withTheme } from '../';
import Icon from './Icon';

import type { Theme } from '../types/Theme';
import type { StyleObj } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  theme: Theme,
  placeholder?: string,
  value: string,
  onChangeText?: (text: string) => void,
  containerStyle?: StyleObj,
  inputStyle?: StyleObj,
};

class TextField extends React.Component<Props> {
  clearInput = () => this.props.onChangeText && this.props.onChangeText('');

  render() {
    const {
      value,
      placeholder,
      onChangeText,
      theme: {
        backgroundColor,
        dividerColor,
        placeholderColor,
        primaryColor,
        textColor,
      },
      containerStyle,
      inputStyle,
      ...rest
    } = this.props;
    return (
      <View
        style={[
          { backgroundColor, borderBottomColor: dividerColor },
          styles.container,
          containerStyle,
        ]}
      >
        <TextInput
          {...rest}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          onChangeText={onChangeText}
          style={[styles.input, { color: textColor }, inputStyle]}
          selectionColor={primaryColor}
        />
        {value ? (
          <TouchableOpacity onPress={this.clearInput}>
            <Icon
              name="ios-close-circle"
              color={placeholderColor}
              style={styles.clearIcon}
              size={18}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

export default withTheme(TextField);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    flexGrow: 1,
    paddingRight: 15,
  },
  clearIcon: {
    paddingRight: 9,
    backgroundColor: 'transparent',
    marginTop: 2,
  },
});
