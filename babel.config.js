module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@type': './src/types',
            '@assets': './src/assets',
            '@hooks': './src/hooks',
          },
        },
      ],
    ],
  }
}
