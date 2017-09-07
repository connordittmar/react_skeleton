# react_skeleton
Basic skeleton and batch file for setting up react environment on Windows.
*NOTE: DO NOT COMMMIT node_modules to master. I am new to node.js and haven't figured out how to only keep our dependencies on the repository.*

## Quick Setup
1.) Clone this repository 
```git clone https://github.com/connordittmar/react_skeleton```
2.) Install node.js from online (.exe available)
3.) Install npm
4.) Command line in project folder:
```
npm init
npm install --save react react-dom
npm install --save-dev webpack
npm install --save-dev babel-loader babel-core
npm install --save-dev babel-cli babel-preset-react babel-preset-es2015
```
5.) The webpack config from the repository is already setup, so code your app up and run:
```
./node_modules/.bin/webpack
```

## Setup Instructions (from scratch):
Install node.js from online ( .exe available for windows )

Install npm (node package manager, dependent on node.js) (javascript equivalent of pip)

Create your project folder and open a command line in the folder:
```
npm init
npm install --save react react-dom
npm install --save-dev webpack
npm install --save-dev babel-loader babel-core
npm install --save-dev babel-cli babel-preset-react babel-preset-es2015
echo { "presets": ["react", "es2015"] } > .babelrc
echo 'insert web config here' > webpack.config.js
mkdir src dist
```
This will setup several things:
-Start a node module package in your working directory
-Install react in your working directory
-Install the babel loader and presets in working directory
-Create the configuration file for babel to know to include react in the list of recognized modules
-Create an empty webpack config file for setup after. The default looks like the example below, assuming that your source and -destination paths followed the convention above:
-Webpack makes it easy to put all elements of the page together and call the result on the html template that django calls up when we visit a page.
```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader" }
        ]
  }
};
```
Next, write your code and build with webpack when ready:
```
./node_modules/.bin/webpack
```
You can also make that path an alias to save time by adding to the package.json file:
```
“scripts”: {
  ...
  “build”: “webpack”
}
```
Remember to comma delimit your json field entries.
