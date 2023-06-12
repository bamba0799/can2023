module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false,
        },
      ],
      [
        'module-resolver',
        {
          alias: {
            '@api': './src/api',
            '@assets': './src/assets',
            '@components': './src/components',
            '@data': './src/data',
            '@hooks': './src/hooks',
            '@layouts': './src/layouts',
            '@lib': './src/lib',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@store': './src/store',
            '@types': './src/types',
            '@utils': './src/utils',
          },
        },
      ],
      'nativewind/babel',
    ],
  };
};
