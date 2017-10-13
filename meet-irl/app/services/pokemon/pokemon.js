(function() {
  'use strict';

  angular.module('api.pokemon', [])
  /*
  .config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  
  this make
  "should call Pokemon.findByName and default to a placeholder image"
  pass but will cause other error on the front-end (view)
  */
  .factory('Pokemon', function($http) {
    var API = 'http://pokeapi.co/api/v2/pokemon/';
    var Pokemon = {};

    Pokemon.findByName = function(name){
      return $http.get(API + name) 
      .then(function(res) {
        return res.data;
      })
      .catch(function(res) {
        return res.data;
      });
    };

    return Pokemon;
  });
})();