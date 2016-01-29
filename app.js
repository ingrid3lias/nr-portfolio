;(function(window){
    angular.module('nickPortfolio', []);
        .directive('articles', function(){
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                templateUrl: 'articles.html',
                link: function(scope, element, attr){}
            }
        })
    
})(window);
