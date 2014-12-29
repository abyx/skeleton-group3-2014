angular.module('app').factory('AddEntityService', function() {
    return {
        addEntity: function(PartyName) {
            alert(PartyName);
        }
    };
});