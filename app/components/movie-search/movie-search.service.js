(function () {
  'use strict';
  angular.module('slated').factory('MovieSearchService', MovieSearchService);
  MovieSearchService.$inject = ['$http'];
  function MovieSearchService($http) {
    return {
      getMovies: getMovies
    };

    function getMovies(param) {
      // return $http.get('http://www.slated.com/films/autocomplete/profiles/?term=' + param);
      return $http.get('/fakes/getMovies.json');
    }
  }
})();