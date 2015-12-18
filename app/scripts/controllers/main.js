'use strict';

/**
 * @ngdoc function
 * @name qualysApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the qualysApp
 */
angular.module('qualysApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.searchText = '';
        $scope.ParentArray = {};

        $scope.loadComments = function() {
            $http.get('../json/test.json').success(function(response) {
                $scope.ParentArray = response;
                console.log($scope.ParentArray);
            });
      };
       
    })
    .filter('highlight', function($sce) {
        return function(text, phrase) {
            if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="typedText">$1</span>');
            return $sce.trustAsHtml(text)
        }
    });
