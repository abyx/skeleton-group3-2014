angular.module('app').controller('pieCtrl', function($scope,statisticSrv) {

    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){return d.key;},
            y: function(d){return d.y;},
            valueFormat: function(d){
                return d3.format(',.0f')(d);
            },
            showLabels: true,
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    $scope.data = [
        {
            key: "Avoda",
            y: 20
        },
        {
            key: "Licud",
            y: 30
        },
        {
            key: "Meretz",
            y: 10
        },
        {
            key: "Hadash",
            y: 5
        },
        {
            key: "Yesh Atid",
            y: 10
        },
        {
            key: "Seniors",
            y: 5
        },
        {
            key: "Ale Yarok",
            y: 20
        }
    ];
});








