/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const { Container, GridBlock, MarkdownBlock } = CompLibrary;
const siteConfig = require(process.cwd() + '/siteConfig.js');

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const ExampleApp = () => (
  <Container padding={['bottom', 'top']} background="light">
    <GridBlock
      contents={[
        {
          content: `View our components at Expo.`,
          imageAlign: 'left',
          image: `${siteConfig.baseUrl}img/qrcode.png`,
          title: 'Example App',
          imageLink: 'https://expo.io/@mobile-dev/react-native-ios-kit',
        },
      ]}
      layout="twoColumn"
    />
  </Container>
);

const EasySetup = () => (
  <Container padding={['bottom', 'top']}>
    <GridBlock
      contents={[
        {
          content: `Just couple of lines to get you up and running.`,
          imageAlign: 'right',
          image: `${siteConfig.baseUrl}img/setup.png`,
          title: 'Easy setup',
        },
      ]}
      layout="twoColumn"
    />
  </Container>
);

class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <Preview />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer" />
        <EasySetup />
        <ExampleApp />
      </div>
    );
  }
}

class Preview extends React.Component {
  render() {
    return (
      <img
        src={siteConfig.baseUrl + 'img/all-components.png'}
        alt="components example"
      />
    );
  }
}

module.exports = Index;
