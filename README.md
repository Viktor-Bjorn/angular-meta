# Angular Meta

A title tag & meta description implementation for Angular JS apps.


## Installation
1. Add the *meta* service file, */app/scripts/services/meta.js*, to your project.
2. Add the meta module as a dependency to your app (see /app/scripts/app.js file).
3. In your configure block, inject the *MetaProvider* and configure as you would a $routeProvider (see /app/scripts/app.js file and the Usage section).
4. Inject the Meta service into a run block, and call `Meta.init()`.
5. In your HTML, create bindings to meta.title and meta.description ($rootScope will have a *meta* property):

        <title data-ng-bind="meta.title"></title>
        <meta name="description" content="{{meta.description}}">

*If you bootstrap your application using the ng-app directive on the <body> tag, you must move the ng-app directive to the <html> tag to expand the scope the the documents <head>, or bootstrap manually*


## Usage

### Configuring routes
The *MetaProvider* API was built to mimic the *$routeProvider* API.

#### Methods
##### **when( String path, Object info )**

    MetaProvider
      .when('/about', {
        title: 'About title',
        description: 'About description'
      })

##### **otherwise( Object info )**

    MetaProvider
      .otherwise({
        title: 'Default title',
        description: 'Default description'
      });


### Placeholders
Just like with routes, you can add placeholders to your route path, and interpolate the value in your meta info.

    MetaProvider
      .when('/about/:section', {
        title: 'About :section',
        description: 'About :section description'
      })

A wildcard, `*`, can be added your paths to match on any string.

### Dynamic meta info.
It's possible that you want to do some crazy stuff with your meta info.

Configuring your routes in the config block is recommended, but if you wish, you can add routes by injecting the *Meta* service into you controllers and calling: `Meta.add( String path, Object info );` This may be useful in instances where your meta info data is coming from some backend service.



## Appendix

### Maintenance
If you encounter any bugs, or hopefully, have ways to improve this module, fork and pull, or just shoot me an email at jay@moonfuse.co.