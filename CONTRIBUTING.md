# Contributing Guidelines

1. Assign yourself to component(s) from the issues.
2. Every component (issue) needs to have a link to its section in the [iOS design docs](https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/). You can also check their design here [iOS 10 GUI](http://ios10.greatsimple.io/). Make sure to read the documentation thoroughly before start implementing them.
3. Make sure to write a brief description of every prop when defining `propTypes`.
4. Always make sure that your code passes `eslint`, `flow`, and `jest` before opening a PR.
5. Make sure you test your component. We use [Jest Snapshots](https://facebook.github.io/jest/docs/tutorial-react-native.html#snapshot-test) so we can quickly test them depending on the props we pass.
6. Have different usages of your component in the `example` app.
