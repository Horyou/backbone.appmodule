# Backbone.AppModule

## Why

It's strongly advised to create modular applications, thus splitting one big application in small independants applications. See Nicholas Zakas slides](http://www.slideshare.net/nzakas/scalable-javascript-application-architecture).

Another good post by Jim Zimmerman: http://www.joezimjs.com/javascript/scalable-javascript-applications/.


This `Backbone.AppModule` is a small API to `start` and `stop` (an application|a) module. The main purpose of an application is to respond to routes and to display as a result a view. Thus this module add an `initialize` function where you can start the application router.

## Dependencies

The only dependency is Backbone, and only exists because of statically adding the `Backbone.extend` function to `AppModule`. And mainly because this module has been created for applications created in `Backbone`.

## API

### `_startApp: function ()`

This is the function you need to implement for your module to do something useful.

This is the logic to start the application module. This function should not need to be called manually. Instead calling `start()` is recommended. It will call this handler if needed.

### `initialize: function (options)`

This is where to add all module logic that should be defined at module startup, e.g. router may be defined here to enable a lazy startup of app module, which means that application module may be started only when the a router callback is called.

For a better example see blog post about usage of Backbone.EnhancedRouter.

### `start: function (callback)`

This is the function which is responsible for starting the module. It basically check if application has not already been started, and if no, create the application by calling `_startApp`, else it return the existing application.

It accepts a function callback that will be called when the application has been started, but no guarantee if the application has some kind of async behaviour.

### `stop: function ()`

This function is reponsible for closing the application module. All the logic is left to the developer as it depends heavily on your usage of this module. You may never need to close an application module, or the logic is directly linked to object instanciated by your module. You may also need some events.


## Usage

The example below is a simple example about how to lazy load the whole app module logic only when a route defined by the app module router is being triggered.

```
AppModule.extend({
  initialize: function () {
    // my awesome module router.
    this.router = new Router();
    this.router.on('route', function (route, args) {
      this.controller.handleRoute(route, args)
    })
  },

  _startApp: function () {
    // start my controller
    if (!this.controller) {
      this.controller = new Controller();
    }
  }
});
```
