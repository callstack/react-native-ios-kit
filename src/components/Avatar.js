/* @flow */
import * as React from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import type { Theme } from '../types/Theme';
import { withTheme } from '../';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

type Props = {
  theme: Theme,
  initials: string,
  url?: string,
  size: number,
  style?: ViewStyleProp,
  onPress?: (e: *) => void,
};

class Avatar extends React.Component<Props> {
  static defaultProps = {
    initials: '',
    size: 50,
  };

  renderTouchableAvatar = () => {
    const styles = getStyles(this.props.size);
    return (
      <TouchableOpacity style={styles.avatar} onPress={this.props.onPress}>
        {this.renderAvatar()}
      </TouchableOpacity>
    );
  };

  renderAvatar = () => {
    const { url, style, initials, size } = this.props;
    const styles = getStyles(size);

    if (url) {
      return <Image style={[styles.avatar, style]} source={{ uri: url }} />;
    }
    const overlay = require('../assets/avatartGradient.png');
    return (
      <ImageBackground
        imageStyle={[styles.avatar]}
        style={[styles.avatar, style]}
        source={overlay}
      >
        <View style={styles.letterWrapper}>
          <Text style={styles.letters}>{initials.slice(0, 2)}</Text>
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

const getStyles = (avatarSize: number) =>
  StyleSheet.create({
    letterWrapper: {
      height: avatarSize,
      width: avatarSize,
      borderRadius: avatarSize / 2,
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    letters: {
      fontSize: avatarSize / 2.4,
      fontFamily: 'ArialRoundedMTBold',
      textAlign: 'center',
      backgroundColor: 'transparent',
      color: 'white',
    },
    avatar: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: avatarSize / 2,
    },
  });
