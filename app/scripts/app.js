'use strict';

angular.module('angularmetaApp', [
  'ngRoute',
  'meta'
])
  .config(function ($routeProvider, MetaProvider) {

    // Meta info configuration.
    MetaProvider.options.title.prefix = '';
    MetaProvider.options.title.suffix = ' | Your sitename';

    MetaProvider
      .when('/', {
        title: 'Homepage title',
        description: 'Homepage description'
      })
      .when('/about', {
        title: 'About title',
        description: 'About description'
      })
      .otherwise({
        title: 'Default title',
        description: 'Default description'
      });

    // Basic route stuff.
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// You need to initalize the Meta service. If there
// is a better initalize the service w/o explicitly
// calling it in the run block, please, let me know.
angular.module('angularmetaApp')
  .run(function(Meta) {
    Meta.init();
  });