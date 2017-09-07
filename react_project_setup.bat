call npm init
call npm install --save react react-dom
call npm install --save-dev webpack
call npm install --save-dev babel-loader babel-core
call npm install --save-dev babel-cli babel-preset-react babel-preset-es2015
echo { "presets": ["react", "es2015"] } > .babelrc
echo 'insert web config here' > webpack.config.js
mkdir src dist
cd dist
echo > index.html
cd ..
cd src
echo > index.js
cd ..
echo Remember to Setup webpack.config.js!
echo React Setup Complete
