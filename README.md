# webpack getting started

This repository was created following the webpack getting started tutorial

https://webpack.js.org/guides/getting-started/


## Run the build

```
./node_modules/.bin/webpack --config webpack.config.js
```


```
./node_modules/.bin/webpack 
```
```
npm install --save-dev style-loader css-loader
npm install --save-dev file-loader
npm install --save-dev csv-loader xml-loader
```

## Output management
```
npm install --save-dev html-webpack-plugin
```
### HtmlWebpackPlugin

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.


### Cleaning up the `/dist` folder
```
npm install clean-webpack-plugin --save-dev
```