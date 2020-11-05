module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
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
};
