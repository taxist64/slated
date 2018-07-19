(function () {
  function movieSearchCtrl() {
    let ctrl = this;
  }

  angular.module('slated')
    .component('movieSearch', {
      templateUrl: 'components/movie-search/movie-search.component.html',
      controller: [movieSearchCtrl],
      controllerAs: 'ctrl',
      bindings: {}
    });
})();
