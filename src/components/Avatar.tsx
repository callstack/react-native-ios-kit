import React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Theme } from '../types/Theme';
import { withTheme } from '../';
import { ViewStyle } from 'react-native';

type Props = {
  theme: Theme;
  initials: string;
  url?: string;
  size: number;
  style?: ViewStyle;
  // @TODO
  onPress?: (e: any) => void;
};

class Avatar extends React.Component<Props> {
  static defaultProps = {
    initials: '',
    size: 50,
  };
  avatarStyles = {
    width: this.props.size,
    height: this.props.size,
    borderRadius: this.props.size / 2,
  };

  renderTouchableAvatar = () => {
    return (
      <TouchableOpacity style={this.avatarStyles} onPress={this.props.onPress}>
        {this.renderAvatar()}
      </TouchableOpacity>
    );
  };

  renderAvatar = () => {
    const { url, style, initials, size } = this.props;

    if (url) {
      return <Image style={this.avatarStyles} source={{ uri: url }} />;
    }
    const overlay = require('../assets/avatartGradient.png');
    return (
      <ImageBackground
        imageStyle={this.avatarStyles}
        style={[this.avatarStyles, style]}
        source={overlay}
      >
        <View
          style={[
            styles.letterWrapper,
            {
              height: size,
              width: size,
              borderRadius: size / 2,
            },
          ]}
        >
          <Text style={[styles.letters, { fontSize: size / 2.4 }]}>
            {initials.slice(0, 2)}
          </Text>
        </View>
      </ImageBackground>
    );
  };

  render() {
    const { onPress } = this.props;
    if (onPress) return this.renderTouchableAvatar();
    return this.renderAvatar();
  }
}

export default withTheme(Avatar);

const styles = StyleSheet.create({
  letterWrapper: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  letters: {
    fontFamily: 'ArialRoundedMTBold',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'white',
  },
});
