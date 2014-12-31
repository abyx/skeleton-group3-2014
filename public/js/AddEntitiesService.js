angular.module('app').factory('AddEntityService', function($http) {
    return {
        addEntity: function(PartyName) {
            $http.post('/party/',
                {name:PartyName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        },
        addPerson: function(PartyName, PersonName) {
            console.log({name:PartyName, person:PersonName});
            $http.post('/person/',
                {name:PartyName, person:PersonName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        },
        AddWord: function(WordName) {
            $http.post('/word/',
                {word:WordName}).then(
                function(response)
                {
                    console.log('got response',response.data);
                }
            );
        }}
});

