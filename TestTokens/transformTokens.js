const StyleDictionary = require('style-dictionary').extend({
    source: ['./tokens.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'build/',
        files: [{
          destination: 'variables.css',
          format: 'css/variables'
        }]
      }
      // ...
    }
  });
  
  StyleDictionary.buildAllPlatforms();