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
            key: "עבודה",
            y: 20
        },
        {
            key: "ליכוד",
            y: 30
        },
        {
            key: "מרצ",
            y: 10
        },
        {
            key: "חדש",
            y: 5
        },
        {
            key: "יש עתיד",
            y: 10
        },
        {
            key: "הגמלאים",
            y: 5
        },
        {
            key: "עלה ירוק",
            y: 20
        }
    ];
});








