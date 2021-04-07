import * as React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import Icon from './Icon';
import { withTheme } from '../core/theming';
import type { Theme } from '../types/Theme';

type Props = {
  /**
   * Provided by the ThemeProvider
   */
  theme: Theme;
  /**
   * Callback function on changing counter result
   */
  onValueChange: (counter: number) => void;
  /**
   * The lowest possible numeric value for the stepper.
   * Default value is 0.
   */
  minValue: number;
  /**
   * The highest possible numeric value for the stepper.
   * The default value of this property is 100.
   */
  maxValue: number;
  /**
   * The numeric value of the stepper.
   */
  value: number;
  /**
   * The step, or increment, value for the stepper.
   * The default value for this property is 1.
   */
  stepValue: number;
};

type State = {
  isDecrementing: boolean;
  isIncrementing: boolean;
};
/**
 * Stepper component
 */
class Stepper extends React.Component<Props, State> {
  static defaultProps = {
    minValue: 0,
    maxValue: 100,
    stepValue: 1,
  };
  constructor(props: Props) {
    super(props);
    if (props.value < props.minValue) {
      throw new Error('Value cannot be lower than minValue');
    }
    if (props.value > props.maxValue) {
      throw new Error('Value cannot be higher than maxValue');
    }
    if (props.minValue > props.maxValue) {
      throw new Error('minValue cannot be higher than maxValue');
    }

    this.state = {
      isDecrementing: false,
      isIncrementing: false,
    };
  }
  componentWillUnmount() {
    clearTimeout(this._timeout);
    clearInterval(this._interval);
  }
  // @ts-ignore
  _interval: IntervalID;
  // @ts-ignore
  _timeout: TimeoutID;

  decrementOnCounter = () => {
    const newValue = this.props.value - this.props.stepValue;
    if (newValue >= this.props.minValue) {
      this.props.onValueChange(newValue);
    }
  };

  incrementOnCounter = () => {
    const newValue = this.props.value + this.props.stepValue;
    if (newValue <= this.props.maxValue) {
      this.props.onValueChange(newValue);
    }
  };

  handleIncrementPressIn = () => {
    this.incrementOnCounter();
    this._timeout = setTimeout(() => {
      this.startInterval(this.incrementOnCounter);
      this.setState({
        isIncrementing: true,
      });
    }, 500);
  };

  handleDecrementPressIn = () => {
    this.decrementOnCounter();
    this._timeout = setTimeout(() => {
      this.startInterval(this.decrementOnCounter);
      this.setState({
        isDecrementing: true,
      });
    }, 500);
  };

  handlePressOut = () => {
    clearTimeout(this._timeout);
    clearInterval(this._interval);
    this.setState({
      isDecrementing: false,
      isIncrementing: false,
    });
  };

  startInterval = (callback: () => void, speed: number = 300) => {
    let i = 0;
    this._interval = setInterval(() => {
      callback();
      i += 1;
      if (i === 10) {
        clearInterval(this._interval);
        this.startInterval(callback, speed / 2);
      }
    }, speed);
  };

  render() {
    const { theme, value, minValue, maxValue } = this.props;
    const { primaryColor, primaryLightColor } = theme;
    const { isIncrementing, isDecrementing } = this.state;
    const isMinimum = value === minValue;
    const isMaximum = value === maxValue;
    return (
      <View style={[styles.container, { borderColor: primaryColor }]}>
        <TouchableWithoutFeedback
          onPressIn={this.handleDecrementPressIn}
          onPressOut={this.handlePressOut}
          disabled={isMinimum}
        >
          <View
            style={[
              {
                borderColor: primaryColor,
                backgroundColor:
                  isMinimum || !isDecrementing
                    ? 'transparent'
                    : primaryLightColor,
              },
              styles.stepperIcon,
              styles.stepperMinus,
            ]}
          >
            <Icon
              name="md-remove"
              size={20}
              color={isMinimum ? primaryLightColor : primaryColor}
              style={{ marginTop: 2 }}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPressIn={this.handleIncrementPressIn}
          onPressOut={this.handlePressOut}
          disabled={isMaximum}
        >
          <View
            style={[
              {
                borderColor: primaryColor,
                backgroundColor:
                  isMaximum || !isIncrementing
                    ? 'transparent'
                    : primaryLightColor,
              },
              styles.stepperIcon,
              styles.stepperPlus,
            ]}
          >
            <Icon
              name="md-add"
              size={20}
              color={isMaximum ? primaryLightColor : primaryColor}
              style={{ marginTop: 2 }}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 94,
    height: 29,
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  stepperIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  stepperMinus: {
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  stepperPlus: {
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
});

export default withTheme(Stepper);
