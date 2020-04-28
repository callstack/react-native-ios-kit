import * as React from 'react';
import Layout from '@theme/Layout';

const TITLE = 'Need help?';
const DESCRIPTION =
  'This project is maintained by a dedicated group of people.';

function Help() {
    const supportLinks = [
      {
        content:
          'Learn more using the documentation on this site.',
        title: 'Browse Docs',
        link: 'react-native-ios-kit/docs/installation.html'
      },
      {
        content: 'Ask questions about the documentation and project',
        title: 'Join the community',
        link: 'https://discord.gg/aUzGqu'
      },
      {
        content: "Find out what's new with this project",
        title: 'Stay up to date',
        link: 'https://callstack.github.io'
      },
    ];

    return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <div className="container margin-vert--lg">
        <div className="text--center margin-bottom--xl">
          <h1>{TITLE}</h1>
          <h3>{DESCRIPTION}</h3>
        </div>
        <div className="row">
          {supportLinks.map(link => (
            <div  className="col col--4 margin-bottom--lg">
              <h2>
                <a href={link.link} target="blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </h2>
              <span>{link.content}</span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
    );
  }

export default Help;
