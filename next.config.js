require('dotenv').config();
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    config.resolve.alias.atoms = path.join(__dirname, 'src/atoms');
    config.resolve.alias.components = path.join(__dirname, 'src/components');
    config.resolve.alias.languages = path.join(__dirname, 'src/languages');
    config.resolve.alias.utils = path.join(__dirname, 'src/utils');
    return config
  }
};
