# babel task runners example

```
git clone git@github.com:Couto/babel-runners-example.git
cd babel-runners-example
npm install
npm start
```

Currently supports:
 * babel cli
 * grunt-babel
 * gulp-babel
 * babel-loader (for webpack)

Available commands:
 * `npm start` - Runs all runners
 * `npm run webpack` - Runs webpack
 * `npm run grunt` - Runs grunt
 * `npm run gulp` - Runs gulp
 * `npm run babel` - Runs babel cli

All generated files end up in the `build` directory on a folder of it's own.
