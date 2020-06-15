# Contributing to react-native-ios-kit

## Code of Conduct

We want this community to be friendly and respectful to each other. Please read [the full text](/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Development Process

The core team works directly on GitHub and all work is public.

### Workflow and Pull Requests

> **Working on your first Pull Request?**
You can learn how from this *free* series [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

*Before* submitting a pull request, please make sure the following is done:

1. Fork the repo and create your branch from `master` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).
1. We have a commit message convention:
    - `fix` - bug fixes
    - `feature` -  new features, e.g. add GroupedList component
    - `docs` - code/structure refactor, e.g. new structure folder for components
    - `refactor` - changes into documentation, e.g. add usage example for Button
    - `chore` - tooling changes, e.g. change circle ci config
1. Be sure to follow the specifics (design, name convention, etc) described in the [iOS design docs](https://developer.apple.com/ios/human-interface-guidelines).
1. Default colors will be provided by the theme, if you find that there's something missing from the theme that might be beneficial for other components
don't hesitate to add it to the theme.
1. For any Text usage, use our components provided in the Typography folder.
1. If your app depends on the theme always wrap you component with `withTheme` to get the theme as a prop.
1. Have different usages of your component in the example app.  
1. Always make sure that your code passes `eslint` before opening a PR.
1. If you've changed APIs, update the documentation.  
1. Make sure to provide an example usage for the component (check how others do it)]

## Running the example

The example app uses [Expo](https://expo.io/). You will need to install the Expo app for [iOS](https://itunes.apple.com/app/apple-store/id982107779) to start developing.

After you're done, you can run `yarn && yarn start` in the `example/` folder and scan the QR code to launch it on your device.

## Working on documentation

We use [docusaurus](https://docusaurus.io). If you want to make changes in documentation feel free to add/edit files inside `/docs` directory. For more information about creating docs with docusaurus see it's [documentation](https://docusaurus.io/docs/en/installation).

## Reporting New Issues

The best way to get your bug fixed is to provide a reduced test case. Please provide a public repository with a runnable example.

## How to Get in Touch

* Callstack Open Source Slack - [#react-native-ios-kit](https://slack.callstack.com/)

## Code Conventions

We use Prettier with ESLint integration.

## License

By contributing to react-native-ios-kit, you agree that your contributions will be licensed under its **MIT** license.
