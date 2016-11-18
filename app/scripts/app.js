(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'templates/home.html'
      })

      .state('valuation', {
        url: '/valuation',
        controller: 'ValuationCtrl as valuation',
        templateUrl: 'templates/valuation.html'
      });
  }

angular
  .module('soVal', ['ui.router'])
  .config(config);

})();
