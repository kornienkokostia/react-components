module.exports = {
  "env": {
    "development": {
      "plugins": ["istanbul"]
    }
  },
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-syntax-jsx',
    'istanbul',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ts',
        ],
        alias: {
          '@': './',
        },
      },
    ],
  ],
  env: {
    development: {
      plugins: ['istanbul'],
    },
  },
};
