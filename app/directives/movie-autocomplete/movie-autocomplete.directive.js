(function () {

  angular
    .module('slated')
    .directive('movieAutocomplete', directive);

  directive.$inject = ['MovieSearchService', '$sce', '$window'];
  function directive(MovieSearchService, $sce, $window) {
    return {
      restrict: 'E',
      templateUrl: '/directives/movie-autocomplete/movie-autocomplete.directive.html',
      scope: {},
      link: link
    };

    function link(scope, elem, attrs) {
      scope.movieList = [];
      scope.searchValue = null;
      scope.showList = false;

      scope.changeValue = function() {
        if (!scope.searchValue) {
          scope.showList = false;
          scope.movieList = [];
          return;
        }
        MovieSearchService.getMovies(scope.searchValue).then(function (response) {
          scope.movieList = response.data;
          scope.showList = true;
        });
      };

      scope.chooseMovie = function(value) {
        scope.showList = false;
        if (value.link_code.indexOf('href') > - 1) {
          let url = value.link_code.split('href=')[1].split('>')[0].replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>]/gi, '');
          $window.location.href = url;
        }
      };

      scope.toTrustedHTML = function(html) {
        return $sce.trustAsHtml(html);
      };
    }

  }
})();
