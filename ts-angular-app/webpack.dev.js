const path = require('path');


module.exports = {
  mode: 'development',
  devtool: '',
  devServer: {
    contentBase: path.join(__dirname, './dist/ts-angular-app/'),
    compress: true,
    port: 2000
  }
};
