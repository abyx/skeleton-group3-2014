/**
 * Created by 012-user on 12/29/2014.
 */

angular.module('app').factory('statisticSrv', function($q) {
    return {
        getMandatsNo4Party: function(partyName) {
        return $q.when(partyName + ' 10 ');
        }
    }
    });
