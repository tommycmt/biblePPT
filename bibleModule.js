var app = angular.module('bible', []);

app.controller('selectControl', function($scope, $http) {

  $http.get("books.json").then(function(response) {
    $scope.books = response.data;
  });
  
  $scope.submit = function() {
    $http.get("bible/" +$scope.selectedBook + ".json").then(function(response) {
      $scope.book = response.data;
      $scope.chapter = $scope.book[$scope.selectedChapter];
      
      $scope.bookName = $scope.books[$scope.selectedBook].name;
      $scope.selectVerse = [];
      for (var verse = parseInt($scope.selectedFromVerse); verse <= parseInt($scope.selectedToVerse); verse ++) {
        $scope.selectVerse.push($scope.chapter[verse-1]);
      }
    });



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
