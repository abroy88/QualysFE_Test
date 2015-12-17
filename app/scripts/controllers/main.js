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

        $scope.ParentArray = {};

        $scope.loadComments = function() {
            $http.get('../json/test.json').success(function(response) {
                $scope.ParentArray = response;
                console.log(response);
            });

        };

    });
