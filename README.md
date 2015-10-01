# module system styles

- `<script>` tags
  - easy to use for a limited number of dependencies
  - brittle
  - used in:
    - all your projects so far
    - the internet
- CommonJS pattern
  - node/npm use this
  - simple and easy to use
  - designed for server-side
  - synchronous, so `require('../some/file')` has to complete before continuing
  - used in:
    - node.js
    - browserify
- AMD (Asynchronous Module Definition)
  - designed for client-side
  - asynchronous, so modules can be loaded in parallel
  - verbose, and hard to read
  - used in:
    - require.js
- ES6 modules
  - native JS implementation, not a workaround
  - easy to understand, very similar to other languages such as Python 
  - not well supported in browsers yet
  - used in:
    - ??
    - Ember
    - React







# Webpack

https://webpack.github.io/

## Install:

```
npm install -g webpack
```


## Use:

```
webpack app.js webpacked.js
```

### For production:

```
webpack app.js webpacked.js -p
```






# Browserify

http://browserify.org/

## Install:

```
npm install -g browserify
```


## Use: 

```
browserify app.js -o browserified.js
```





https://github.com/vigetlabs/gulp-starter/tree/1.0.0






https://github.com/vigetlabs/gulp-starter

