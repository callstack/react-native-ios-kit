// @flow
import * as React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import type { Theme } from '../types/Theme';
import Icon, { type IconSource } from './Icon';
import { Subhead } from './Typography';
import { withTheme } from '../';
import * as colors from '../styles/colors';

const fastEaseInEaseOut = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
};

type Props = {
  icon?: IconSource,
  title: string,
  content: React.Element<*>,
  expandedContent: React.Element<*>,
  onPress: () => void,
  /**
   * Global theme to use
   */
  theme: Theme,
};
type State = {
  expandedContentVisible: boolean,
};
// TODO: implement blur view

class Widget extends React.Component<Props, State> {
  state = {
    expandedContentVisible: false,
  };

  toggleExpandedConent = () => {
    LayoutAnimation.configureNext(fastEaseInEaseOut);
    this.setState(state => ({
      expandedContentVisible: !state.expandedContentVisible,
    }));
  };

  render() {
    const { icon, title, content, onPress, expandedContent } = this.props;
    const { expandedContentVisible } = this.state;
    return (
      <View>
        <View style={[styles.widgetHead, styles.widgetSection]}>
          {icon ? (
            <Icon style={styles.icon} size={22} name={icon} />
          ) : (
            <View style={styles.iconPlaceholder} />
          )}
          <Subhead style={styles.widgetTitle}>{title.toUpperCase()}</Subhead>
          {expandedContent ? (
            <TouchableWithoutFeedback onPress={this.toggleExpandedConent}>
              <Subhead>
                {expandedContentVisible ? 'Show Less' : 'Show More'}
              </Subhead>
            </TouchableWithoutFeedback>
          ) : (
            <View />
          )}
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          {expandedContentVisible ? (
            <View style={[styles.widgetBody, styles.widgetSection]}>
              <View style={styles.separator} />
              {expandedContent}
            </View>
          ) : (
            <View
              style={[
                styles.widgetBody,
                styles.widgetSection,
                styles.defaultWidgetBody,
              ]}
            >
              {content}
            </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default withTheme(Widget);

const styles = StyleSheet.create({
  widgetSection: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    overflow: 'hidden',
  },
  widgetHead: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff99',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  widgetTitle: {
    flex: 1,
    color: colors.greyD2,
  },
  widgetBody: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff55',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  defaultWidgetBody: {
    height: 120,
  },
  icon: {
    marginRight: 10,
  },
  iconPlaceholder: {
    marginRight: 10,
    width: 22,
    height: 22,
  },
  separator: {
    flex: 1,
    height: 1,
  },
});
