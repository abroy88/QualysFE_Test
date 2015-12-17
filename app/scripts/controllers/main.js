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
        $scope.searchBox = function() {
            if ($('#search').val().length !== 0) {
                $('.searchable').each(function() {
                    //$('.searchable').removeClass('highlight');
                    var search_value = $("#search").val();
                    var search_regexp = new RegExp(search_value, "g");
                    $(this).html($(this).html().replace(search_regexp, "<span class = 'highlight'>" + search_value + "</span>"));
                });
            }
        }

    })
    .filter('highlight', function($sce) {
        return function(text, phrase) {
            if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<span class="highlighted">$1</span>');
            return $sce.trustAsHtml(text)
        }
    });
