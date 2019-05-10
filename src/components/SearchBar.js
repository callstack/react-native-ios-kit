/* @flow */
import * as React from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from './Icon';

import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme,
  /**
   * Callback that is called when the text input's text changes
   */
  onValueChange?: (text: string) => void,
  /**
   * Placeholder of text input. Defaults to "Search"
   */
  placeholder?: string,
  /**
   * Value of text input
   */
  value: string,
  /**
   * Indicates presence of Cancel button. Defaults to false
   */
  withCancel?: boolean,
  /**
   * Text of Cancel Button. Defaults to "Cancel"
   */
  cancelText?: string,
  /**
   * Indicates if Cancel button and TextInput should animate on focus/blur. Defaults to false
   */
  animated?: boolean,
  /**
   * Animation duration. Default 200ms
   */
  animationTime?: number,
  /**
   * Callback invoked on text input focus
   */
  onFocus?: () => void,
  /**
   * Callback invoked on text input blur
   */
  onBlur?: () => void,
};

type State = {
  anim: *,
  cancelWidth: number,
};

class SearchBar extends React.Component<Props, State> {
  static defaultProps = {
    placeholder: 'Search',
    withCancel: false,
    cancelText: 'Cancel',
    animated: false,
    animationTime: 200,
  };
  state = {
    anim: new Animated.Value(0),
    cancelWidth: 0,
  };

  _input = undefined;

  clearInput = (): void =>
    this.props.onValueChange && this.props.onValueChange('');
  cancelInput = (): void => {
    this.props.onValueChange && this.props.onValueChange('');
    if (this._input) this._input.blur();
  };
  focusInput = (): void => {
    if (this._input) this._input.focus();
  };
  handleInputFocus = (): void => {
    this.animateTo(1);
    if (typeof this.props.onFocus === 'function') this.props.onFocus();
  };
  handleInputBlur = (): void => {
    this.animateTo(0);
    if (typeof this.props.onBlur === 'function') this.props.onBlur();
  };

  // $FlowFixMe
  handleLayout = ({ nativeEvent: { layout: { width } } }) => {
    this.setState({ cancelWidth: width });
  };

  animateTo = (toValue: 1 | 0): void => {
    Animated.timing(this.state.anim, {
      toValue,
      easing: Easing.linear,
      duration: this.props.animationTime,
    }).start();
  };
  render() {
    const {
      value,
      placeholder,
      onValueChange,
      theme: {
        barColor,
        backgroundColor,
        placeholderColor,
        textColor,
        primaryColor,
      },
      withCancel,
      cancelText,
      animated,
    } = this.props;
    const { anim, cancelWidth } = this.state;
    const { width } = Dimensions.get('window');
    return (
      <View style={[{ backgroundColor, width }, styles.container]}>
        <TouchableHighlight
          underlayColor={backgroundColor}
          onPress={this.focusInput}
          onLongPress={this.focusInput}
          style={styles.inputTouchWrapper}
        >
          <Animated.View
            style={[
              styles.inputWrapper,
              {
                backgroundColor: barColor,
                width: animated
                  ? anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [width - 20, width - 20 - cancelWidth],
                    })
                  : width - 20 - cancelWidth,
              },
            ]}
          >
            <Icon
              name="ios-search"
              color={placeholderColor}
              style={styles.searchIcon}
              size={18}
            />
            <TextInput
              ref={ref => (this._input = ref)}
              style={[{ color: textColor }, styles.input]}
              value={value}
              onChangeText={onValueChange}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              selectionColor={primaryColor}
              onFocus={this.handleInputFocus}
              onBlur={this.handleInputBlur}
            />
            {value ? (
              <TouchableOpacity onPress={this.clearInput}>
                <Icon
                  name="ios-close-circle"
                  color={placeholderColor}
                  style={styles.clearIcon}
                  size={20}
                />
              </TouchableOpacity>
            ) : null}
          </Animated.View>
        </TouchableHighlight>
        {withCancel && (
          <View onLayout={this.handleLayout}>
            <TouchableOpacity onPress={this.cancelInput}>
              <Animated.Text
                style={[
                  styles.cancelText,
                  {
                    color: primaryColor,
                    opacity: animated ? anim : 1,
                    transform: [
                      {
                        translateX: animated
                          ? anim.interpolate({
                              inputRange: [0, 1],
                              outputRange: [cancelWidth - 20, 0],
                            })
                          : 0,
                      },
                    ],
                  },
                ]}
              >
                {cancelText}
              </Animated.Text>
            </TouchableOpacity>
          </View>
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
  clearIcon: {
    paddingRight: 9,
    backgroundColor: 'transparent',
    marginTop: 2,
  },
  inputTouchWrapper: {
    flexGrow: 1,
    borderRadius: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    paddingBottom: 5,
    paddingTop: 3,
    borderRadius: 10,
    flexGrow: 1,
    height: 36,
    alignItems: 'center',
    overflow: 'hidden',
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
