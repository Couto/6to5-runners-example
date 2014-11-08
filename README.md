# 6to5 task runners example

```
git clone git@github.com:Couto/6to5-runners-example.git
cd 6to5-runners-example
npm install
npm start
```

Currently supports:
 * 6to5 cli
 * grunt-6to5
 * gulp-6to5
 * 6to5-loader (for webpack)

Available commands:
 * `npm start` - Runs all runners
 * `npm run webpack` - Runs webpack 
 * `npm run grunt` - Runs grunt 
 * `npm run gulp` - Runs gulp

All generated files end up in the `build` directory on a folder of it's own.
