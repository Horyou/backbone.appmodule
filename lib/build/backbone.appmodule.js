(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['backbone'], function(Backbone) {
      return factory(Backbone);
    });
  } else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    module.exports = factory(Backbone);
  } else {
    factory(root.Backbone);
  }

}(this, function(Backbone) {
  "use strict";

  // @include ../backbone.appmodule.js
  Backbone.AppModule = AppModule;

  return AppModule;
}));
