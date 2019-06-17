var app = angular.module('bible', []);

app.controller('selectControl', function($scope, $http) {

  $http.get("books.json")
  .then(function(response) {
    $scope.books = response.data;
  });
  
  $scope.submit = function() {
    console.log($scope.selectedBook);
    console.log($scope.selectedChapter);
    console.log($scope.selectedFromVerse);
    console.log($scope.selectedToVerse);
  }
  
});

angular.module('bible').filter('range', function() {
    return function(input, min, max) {
        min = parseInt(min, 10);
        max = parseInt(max, 10);
        for (var i = min; i < max; i++)
            input.push(i);
        return input;
    };
});
