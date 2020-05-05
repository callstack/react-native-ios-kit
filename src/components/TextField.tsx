import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { withTheme } from '../';
import Icon from './Icon';

import { Theme } from '../types/Theme';
import { TextStyle, ViewStyle } from 'react-native';

type Props = {
  theme: Theme;
  placeholder?: string;
  value: string;
  clearButton?: boolean;
  onValueChange?: (text: string) => void;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
};

class TextField extends React.Component<Props> {
  clearInput = () => this.props.onValueChange && this.props.onValueChange('');

  render() {
    const {
      value,
      placeholder,
      onValueChange,
      clearButton,
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
          onChangeText={onValueChange}
          style={[styles.input, { color: textColor }, inputStyle]}
          selectionColor={primaryColor}
        />
        {value && clearButton !== false ? (
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
