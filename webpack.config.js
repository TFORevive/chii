const path = require('path');

module.exports = (env, argv) => {
  const config = {
    entry: './target/index.ts',
    devtool: 'inline-source-map',
    output: {
      filename: 'target.js',
      path: path.resolve(__dirname, 'public'),
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: { safari: 6 },
                      browserslistEnv: 'safari >= 6',
                      useBuiltIns: 'entry',
                      corejs: '3.20',
                      forceAllTransforms: true,
                    },
                  ],
                ],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/],
              },
            },
          ],
        },
      ],
    },
  };

  if (argv.mode === 'production') {
    //config.devtool = 'none';
  }

  return config;
};
