(function () {
  'use strict';

  const app = angular.module('starter', [
    'ui.router',
    'mainjs',
    'authenticatejs',
    'momentjs',
    'spotifyjs'
  ]);

  app.config(
    function (
      $locationProvider
    ) {
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode(true);
    }
  );

  app.run(function ($state, $rootScope, authenticateSrvc) {
    // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    //   console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    // });

    // $rootScope.$on("$locationChangeSuccess", function (event, newUrl, oldUrl) {
    //   console.log("oldUrl : ", oldUrl);
    //   console.log("newUrl : ", newUrl);
    // });

    if (localStorage.getItem('isLoggedIn') === 'true') {
      authenticateSrvc.renewTokens();
    } else {
      // Handle the authentication
      // result in the hash
      authenticateSrvc.handleAuthentication();
    }
  });

})();
