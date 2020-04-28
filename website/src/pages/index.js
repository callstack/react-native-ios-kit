import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import classnames from 'classnames';
import CodeSnippet from "@site/src/theme/CodeSnippet";

import Layout from '@theme/Layout';
import styles from './styles.module.css';

const snippet = `import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'react-native-ios-kit';
import color from 'color';
import App from './src/App';

const theme = {
  ...DefaultTheme,
  primaryColor: 'tomato',
  primaryLightColor: color('tomato').lighten(0.2).rgb().string(),
  disabledColor: 'yellow',
};

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
`


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig } = context;
  const {siteConfig: {customFields = {}, tagline } = {}} = context;
  return (
    <Layout
      permalink="/"
      title={tagline}
      description={customFields.description}>
      <main>
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroProjectTagline}>
              <img
                alt="react-native-ios-kit-logo"
                className={styles.heroLogo}
                src={useBaseUrl('img/ios-kit.svg')}
              />
              {siteConfig.title}
            </h1>
            <h2 className={styles.heroProjectTagline}>{siteConfig.tagline}</h2>
            <div className={styles.indexCtasWrapper}>
              <div className={styles.indexCtas}>
                <Link
                  className={styles.indexCtasGetStartedButton}
                  to={useBaseUrl('docs/installation')}>
                  Get Started
                </Link>
              </div>
              <div className={styles.indexCtas}>
                <Link
                  className={styles.indexCtasGetStartedButton}
                  to='https://github.com/callstack/react-native-ios-kit'
                  target="blank" rel="noopener noreferrer"
                  >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.section}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className="col">
                <img
                  className={styles.featureImage}
                  alt="All Components"
                  src={useBaseUrl('img/all-components.png')}
                />
              </div>
              <div className={classnames('col', styles.featureWrapper)}>
                <h2 className={classnames(styles.featureHeading)}>
                  Overview
                </h2>
                <p className="padding-horiz--md">
                  Support for basic iOS components like <code>SegmentedControl</code>, <code>SearchBar</code>, <code>TabBar</code>, <code>Slider</code>, <code>TableView</code> and many more.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className={styles.sectionAlt}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className={classnames('col', styles.featureWrapper)}>
                <h2 className={styles.featureHeading}>
                  Easy setup
                </h2>
                <p className={"padding-horiz--md"}>
                  Just couple of lines to get you up and running.
                </p>
              </div>
              <div className="text--left">
              <CodeSnippet snippet={snippet} language='jsx'/>
              </div>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className={styles.sectionAlt}>
          <div className="container text--center margin-bottom--xl">
            <div className="row">
              <div className='col'>
                <img
                  className={styles.featureImage}
                  alt="All Components"
                  src={useBaseUrl('img/qrcode.png')}
                />
              </div>
              <div className={classnames('col', styles.featureWrapper)}>
                {/* <h2 className={classnames(styles.featureHeading)}>
                  Example App
                  todo: https://expo.io/@mobile-dev/react-native-ios-kit
                </h2> */}
                <h2 className={styles.featureHeading}>
                  <Link
                    className={styles.featureHeading}
                    to={'https://expo.io/@mobile-dev/react-native-ios-kit'}
                    target="blank" rel="noopener noreferrer"
                    >
                    Example App
                  </Link>
                </h2>
                <p className={"padding-horiz--md"}>
                  View our components at Expo.
                </p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}

export default Home;
