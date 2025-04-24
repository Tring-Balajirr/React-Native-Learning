module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          src: './src',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin'
  ],
};
