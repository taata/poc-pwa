const path = require('path');

const sassLoadImports = () => {
  return ['@import "./src/styles/core.scss";'];
};

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: { data: sassLoadImports() },
      },
    ],
    include: path.resolve(__dirname, '../'),
    exclude: path.resolve(__dirname, 'node_modules'),
  });

  config.module.exports = [{
    dontAutoRegisterSw: true,
    generateSw: true,
    devSwSrc: '/src/serviceWorker.js',
    generateInDevMode: false,
    workboxOpts: {
      swSrc: '/src/serviceWorker.js',
    },
  }]

  return config;
};
