const React = require('react');

const GithubButton = props => (
  <a
    className="github-button" // part of the https://buttons.github.io/buttons.js script in siteConfig.js
    href={`https://github.com/${props.config.organizationName}/${
      props.config.projectName
    }`}
    data-icon="octicon-star"
    data-count-href={`/${props.config.organizationName}/${
      props.config.projectName
    }/stargazers`}
    data-count-api={`/repos/${props.config.organizationName}/${
      props.config.projectName
    }#stargazers_count`}
    data-count-aria-label="# stargazers on GitHub"
    aria-label="Star this project on GitHub"
  >
    Star
  </a>
);

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${doc}`;
  }

  pageUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}/${doc}`;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('installation.html')}>Getting Started</a>
            <a href={this.docUrl('button.html')}>Guides</a>
            <a href={this.docUrl('api.html')}>API Reference</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href="https://twitter.com/callstackio" target="_blank">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.props.config.repoUrl}>GitHub</a>
            <GithubButton config={this.props.config} />
          </div>
        </section>

        <a
          href="https://callstack.com"
          target="_blank"
          className="fbOpenSource"
        >
          <img
            src={this.props.config.baseUrl + 'img/callstack-logo.svg'}
            alt="Callstack Engineers"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">
          Copyright &copy; {currentYear} {this.props.config.companyName}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
