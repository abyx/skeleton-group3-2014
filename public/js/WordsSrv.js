/**
 * Created by 012-user on 12/31/2014.
 */

angular.module('app').factory('WordsSrv', function($http) {
    return {
        getWords: function() {
            return $http.get('/words/').then(
                function(response)
                {
                    return response.data;
                }
            )
        }
    }
});