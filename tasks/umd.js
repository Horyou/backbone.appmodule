module.exports = {
  dist: {
    src: 'lib/<%= pkg.name %>.js',
    dest: 'dist/<%= pkg.name %>.js',
    template: 'umd',
    objectToExport: 'AppModule',
    indent: '  ',
    deps: {
      default: ['backbone'],
      amd: ['backbone'],
      cjs: ['backbone'],
      global: ['backbone']
    }
  }
};
