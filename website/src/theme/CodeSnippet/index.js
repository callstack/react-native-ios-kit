import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import github from 'prism-react-renderer/themes/github';


const CodeSnippet = ({ snippet, language}) => {
  const {
    siteConfig: {
      themeConfig: {prism = {}},
    },
  } = useDocusaurusContext();

  const {isDarkTheme} = useThemeContext();
  const lightModeTheme = prism.theme || github;
  const darkModeTheme = prism.darkTheme || lightModeTheme;
  const prismTheme = isDarkTheme ? darkModeTheme : lightModeTheme;

  return (
      <Highlight {...defaultProps} theme={prismTheme} code={snippet} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
  )
}

export default CodeSnippet;
