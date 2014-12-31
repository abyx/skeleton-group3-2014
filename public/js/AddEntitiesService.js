angular.module('app').factory('AddEntityService', function($http) {
    return {
        AddWord: function(WordName) {
            $http.post('/word/',
                {word:WordName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        },
        addEntity: function(PartyName) {
            $http.post('/party/',
                {name:PartyName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        }




    };
});



