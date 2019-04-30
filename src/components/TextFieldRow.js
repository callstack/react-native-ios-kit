/* @flow */
import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import RowItem from './RowItem';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  theme: Theme,
  title?: string,
  value: string,
  placeholder?: string,
  onValueChange: (text: string) => void,
};

class TextFieldRow extends React.Component<Props> {
  static defaultProps = {
    placeholder: '',
  };
  input = undefined;

  focusInput = () => {
    if (this.input) this.input.focus();
  };

  renderRightComponent = () => {
    const {
      value,
      placeholder,
      onValueChange,
      theme: { placeholderColor, primaryColor, textColor },
      ...rest
    } = this.props;
    return (
      <TextInput
        ref={ref => {
          this.input = ref;
        }}
        {...rest}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        onChangeText={onValueChange}
        style={[styles.input, { color: textColor }]}
        selectionColor={primaryColor}
      />
    );
  };
  render() {
    const { title } = this.props;
    return (
      <RowItem
        title={title}
        renderRight={this.renderRightComponent}
        onPress={this.focusInput}
        {...this.props}
      />
    );
  }
}

export default withTheme(TextFieldRow);

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
    fontSize: 18,
    width: '100%',
  },
});
