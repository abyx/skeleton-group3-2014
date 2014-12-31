/**
 * Created by 012-user on 12/29/2014.
 */

angular.module('app').factory('statisticSrv', function($http) {
    return {
        getMandatsNo4Party: function(partyName) {
            return $http.get('/party/'+partyName).then(
                function(response)
                {
                    console.log(response.data);
                    return response.data;

                }
            ).catch(function (err)
                {
                console.log(err);
                }
            )
        },
        getMandatsNo4PartyGraph: function(partyName) {
            return $http.get('/partyforgraph/'+partyName).then(
                function(response)
                {
                    return response.data;

                }
            )
        }
    }
    });
