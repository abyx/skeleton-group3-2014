angular.module('app').controller('ForecastCtrl', function($scope,statisticSrv) {

    //LineGraph
    $scope.options = {
        chart: {
            type: 'sparklinePlus',
            height: 300,
            x: function(d, i){return i;},
            xTickFormat: function(d) {
                return d3.time.format('%x')(new Date($scope.data[d].x))
            },
            transitionDuration: 250
        }
    };


    var ge;
    google.earth.createInstance('map3d', initCB, failureCB);

    function initCB(instance) {
        ge = instance;
        google.earth.fetchKml(ge,'http://localhost:3000/cities.kml', getKML);
        ge.getWindow().setVisibility(true);
    }

    function failureCB(errorCode) {
        console.log('GE init')
    }
    function getKML(kmlObject){
        if (kmlObject) {
            ge.getFeatures().appendChild(kmlObject);
        }
    }




    //$scope.data = sine();

    //$scope.data = volatileChart(25.0, 0.09,30);


    /* Random Data Generator (took from nvd3.org) */
/*
    function sine() {
        var sin = [];
        var now =+new Date();

        for (var i = 0; i < 100; i++) {
            sin.push({x: now + i * 1000 * 60 * 60 * 24, y: Math.sin(i/10)});
        }

        return sin;
    }*/


    function volatileChart(startPrice, volatility, tweets) {

        var rval =  [];


        for(var i = 0; i < tweets.length; i++) {
            //var now =tweets[i].time;
            rval.push({x: tweets[i].time+i, y: tweets[i].count});
            /*
            rval.push({x: now + i * 1000 * 60 * 60 * 24, y: startPrice});
            var rnd = tweets[i].count;
            var changePct = 2 * volatility * rnd;
            if ( changePct > volatility) {
                changePct -= (2*volatility);
            }

            startPrice = startPrice + startPrice * changePct;*/
        }
        return rval;
    }

    // Bar Graph

    $scope.optionsBar = {
        chart: {
            type: 'discreteBarChart',
            height: 300,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.0f')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'Party Name'
            },
            yAxis: {
                axisLabel: 'Mandats No.',
                axisLabelDistance: 30
            }
        }
    };



    // Botton Click
    $scope.buttonClicked = function() {

        statisticSrv.getMandatsNo4Party($scope.model.text).then(
            function(mandat) {
                $scope.dataBar = [
                    {
                        key: "Mandats",
                        values: [
                            {
                                "label": $scope.model.text,
                                "value": mandat
                            }]
                    }];

            }
        )

        statisticSrv.getMandatsNo4PartyGraph($scope.model.text).then(

            function(tweets) {
                $scope.data = volatileChart(130.0, 0.02,tweets);


            }
        )
        $scope.visible = true;


    }



});









