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

const Buttons = () => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">
        <Button href={`${siteConfig.baseUrl}docs/installation.html`}>
          Get Started
        </Button>
        <Button href="https://github.com/callstack/react-native-ios-kit">
          GitHub
        </Button>
      </div>
    </div>
  </div>
);

const ExampleAppSection = () => (
  <Container padding={['bottom', 'top']}>
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

const EasySetupSection = () => (
  <Container padding={['bottom', 'top']} background="light">
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

const PreviewSection = () => (
  <Container padding={['bottom', 'top']}>
    <GridBlock
      contents={[
        {
          imageAlign: 'left',
          image: `${siteConfig.baseUrl}img/all-components.png`,
          title: 'Overview',
          content: 'Support for basic iOS components like `SegmentedControl`, `SearchBar`, `TabBar`, `Slider`, `TableView` and many more.'
        },
      ]}
      layout="oneColumn"
    />
  </Container>
);

class HomeSplash extends React.Component {
  render() {
    return (
      <SplashContainer>
        <div className="inner">
          <div className="projectLogo">
            <img src={`${siteConfig.baseUrl}img/ios-kit.svg`} />
          </div>
          <ProjectTitle />
          <Buttons />
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
        <PreviewSection />
        <EasySetupSection />
        <ExampleAppSection />
      </div>
    );
  }
}

module.exports = Index;
