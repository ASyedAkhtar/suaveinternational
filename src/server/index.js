require('@babel/register') ({
  ignore: [/(node_modules)/, '../components/css'],
  presets: ['@babel/preset-env', '@babel/preset-react']
});

require('./server.js');
require('./controller.js');
