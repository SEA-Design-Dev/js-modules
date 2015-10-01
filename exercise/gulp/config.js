var dest = "./build";
var src = './src';

module.exports = {
  javascript: {
    src: src + '/js/**/*.js',
    dest: dest + '/js/'
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + '/assets/'
  },
  sass: {
    src: src + "/css/**/*.{sass,scss}",
    dest: dest + '/css/',
    settings: {
      indentedSyntax: true, // Enable .sass syntax!
    }
  },
  markup: {
    src: [src + '/*.jade', '!' + src + '/_*.jade'],
    dest: dest
  },
  server: {
    src: dest,
    livereload: true,
    directoryListing: false,
    open: false,
    port: 9000
  },
  production: {
    cssSrc: dest + '/css/*.css',
    jsSrc: dest + '/js/*.js',
    dest: dest
  }
};
