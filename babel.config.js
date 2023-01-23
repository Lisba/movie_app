module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '*': '.',
          '@root': './',
          '@src': './src',
          '@assets': './src/assets',
          '@config': './src/config',
          '@components': './src/components',
          '@helpers': './src/helpers',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
  ],
};
