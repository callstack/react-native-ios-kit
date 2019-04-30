/* eslint-disable import/no-commonjs */
module.exports = {
  presets: ['expo'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-ios-kit': '../src/index',
          'react-native-vector-icons': '@expo/vector-icons',
        },
      },
    ],
  ],
};
