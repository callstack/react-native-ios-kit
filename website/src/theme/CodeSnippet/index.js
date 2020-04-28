import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const CodeSnippet = ({ snippet, language}) => {
  // TODO: Inject current theme to Highlight component
  // const context = useDocusaurusContext();


  return (
      <Highlight {...defaultProps} code={snippet} language={language}>
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
