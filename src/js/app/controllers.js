/* Controllers */

angular.module('tutte')
  .controller('machine', function($scope, initialData, converters, utils, $sce) {

    $scope.keyStream = initialData.key;

    $scope.showMatches = false;

    $scope.useImpulse = 'i1';

    $scope.rowWidth = 575;
    $scope.impulseTableWidth = 575;

    $scope.matchLength = 5;

    $scope.impulses = {};

    var impulseRows = [];

    $scope.$watch('keyStream', function(newValue) {
      console.log('watching');
      $scope.impulses.i1 = converters.getImpulseArray($scope.keyStream, 1).join('');
      $scope.impulses.i2 = converters.getImpulseArray($scope.keyStream, 2).join('');
      $scope.impulses.i3 = converters.getImpulseArray($scope.keyStream, 3).join('');
      $scope.impulses.i4 = converters.getImpulseArray($scope.keyStream, 4).join('');
      $scope.impulses.i5 = converters.getImpulseArray($scope.keyStream, 5).join('');
    });

    $scope.$watch('useImpulse', function(newValue) {
      $scope.arrangeImpulse();
    });

    $scope.$watch('matchLength', function(newValue, oldValue) {
      var length;
      if (newValue !== oldValue) {
        length = parseInt(newValue, 10);
        if (!isNaN(length) && length >= 0) {
          highlight(length);
        }
      }
    });

    $scope.arrangeImpulse = function() {
      var impulseLength = $scope.impulses[$scope.useImpulse].length;
      impulseRows = [];

      for (var i = 0; i < impulseLength; i = i + $scope.rowWidth) {
        impulseRows.push($scope.impulses[$scope.useImpulse].substr(i, $scope.rowWidth));
      }
      $scope.impulseTableWidth = $scope.rowWidth;

      highlight(parseInt($scope.matchLength, 10));

    };

    console.log('main');

    function highlight(matchLength) {

      var matches = [];
      var matchRow = [];

      // Create an array of 1's equal to the length of a row
      for (i = 0; i < impulseRows[0].length; i++) {
        matchRow.push(1);
      }

      // Create a copy of that array for each row and an array
      // version of each row
      for (i = 0; i < impulseRows.length; i++) {
        matches.push(matchRow.slice(0));
      }

      var comparison;

      for (i = 0; i < impulseRows.length - 1; i++) {
        for (j = i + 1; j < impulseRows.length; j++) {
          comparison = utils.compare(impulseRows[i], impulseRows[j], matchLength);
          matches[i] = utils.and(matches[i], comparison);
          matches[j] = utils.and(matches[j], comparison);
        }
      }

      var formattedRow;
      $scope.impulseTable = [];

      for (i = 0; i < impulseRows.length; i++) {
        formattedRow = utils.format(impulseRows[i], matches[i]);
        $scope.impulseTable.push($sce.trustAsHtml(formattedRow));
      }

    }

  });