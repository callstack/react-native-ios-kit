/* @flow */
import * as React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import RowItem from './RowItem';
import withTheme from '../core/withTheme';
import type { Theme } from '../types/Theme';
import type { IconSource } from './Icon';

type Props = {
  theme: Theme,
  title?: string,
  value: string,
  placeholder?: string,
  onValueChange: (text: string) => void,

  icon?: IconSource,
  subtitle?: string,
  first?: boolean,
  last?: boolean,
};

class TextFieldRow extends React.Component<Props> {
  static defaultProps = {
    placeholder: '',
  };

  input = undefined;

  focusInput = () => {
    if (this.input) this.input.focus();
  };

  renderRight = () => {
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
    const { title, icon, subtitle, first, last } = this.props;
    return (
      <RowItem
        title={title}
        renderRight={this.renderRight}
        onPress={this.focusInput}
        icon={icon}
        subtitle={subtitle}
        first={first}
        last={last}
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
