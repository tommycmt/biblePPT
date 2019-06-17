var app = angular.module('bible', []);

app.controller('selectControl', function($scope, $http) {

  $http.get("books.json").then(function(response) {
    $scope.books = response.data;
  });
  
  $scope.submit = function() {
    $http.get("bible/" +$scope.selectedBook + ".json").then(function(response) {
      $scope.book = response.data;
      $scope.chapter = $scope.book[$scope.selectedChapter];
      
      $scope.selectedVerse = [];
      for (var verse = parseInt($scope.selectedFromVerse); verse <= parseInt($scope.selectedToVerse); verse ++) {
        $scope.selectedVerse.push({"index": verse, "content": $scope.chapter[verse-1]});
      }
      
      $scope.finalBookName = $scope.books[$scope.selectedBook].name;
      $scope.finalChapter = $scope.selectedChapter;
      $scope.finalFromVerse = $scope.selectedFromVerse;
      $scope.finalToVerse = $scope.selectedToVerse;
      document.getElementsByClassName("templateContainer")[0].style.display = "block";
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