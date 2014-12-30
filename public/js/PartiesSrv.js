/**
 * Created by 012-user on 12/30/2014.
 */
angular.module('app').factory('PartiesSrv', function($http) {
    return {
        getAll: function() {
            console.log('in getAll');
            return $http.get('/parties/').then(
                function(response)
                {
                    console.log('got response',response.data);
                    return response.data;
                }
            );
        }
    };
});
