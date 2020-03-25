angular.module('featureServices',[])

.factory('Feature ', function($http){
    var featureFactory = {};

    featureFactory.getFeatures = function() {
        return $http.get('/api/featureManagement');
    }

    return featureFactory;
})