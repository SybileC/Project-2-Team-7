function init() {
    dropdownMenu = d3.select("#selDataset");

    d3.json("top_players.json").then(function(data) {
       
        playersAge = []
        ratings = []
        wages = []

        for (var i = 0; i < data.length; i++) {
            age = data[i]["age"];
            overall = data[i]["overall"];
            wage = data[i]["wage_eur"];
            
            playersAge.push(age);
            ratings.push(overall)
            wages.push(wage);
   
        }
        
        top_playersAge = playersAge.slice(0, 100);
        top_rated = ratings.slice(0, 100);
        top_wages = wages.slice(0, 100);


        wageYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_wages
            // text: ,
        }];

        ratingYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_rated
            // text: ,
        }];

        // data = [wageYAxis, ratingYAxis];

        var frames = [
            {name: "Players' Wage", data: [{x: top_playersAge, y: top_wages}]},
            {name: "Players' Rating", data: [{x: top_playersAge, y: top_rated}]}
          ];

    
        layout1 = {
            title: "Correlation"
        } 
    
        Plotly.newPlot("bar", wageYAxis, layout1);

        // Plotly.newPlot("bar", wageYAxis, {
        //     xaxis: {title: "Players' Age"},
        //     // yaxis: {title: "Players' Wage"},
        //     updatemenus: [{
        //       buttons: [
        //         {method: 'animate', args: [["Players'Wage"]], label: "Players' Wage"},
        //         {method: 'animate', args: [["Players' Rating"]], label: "Players' Rating"}
        //       ]
        //     }]
        //   }).then(function() {
        //     Plotly.addFrames("bar", frames);
        //   });

    physicalAttributes = ["age", "preferred_foot", "bmi", "height_in", "weight_lbs"];

    physicalAttributes.forEach((attribute) => {
        dropdownMenu
            .append("option")
            .text(attribute)
            .property("value", attribute);
        });   
    });
};

function optionChanged(xAxis) {
    d3.json("top_players.json").then(function(data) {
       
        axisValues = []

        for (var i = 0; i < data.length; i++) {
            x = data[i][xAxis];
    
            wage = data[i]["wage_eur"];
            
            axisValues.push(x);
            wages.push(wage);

        }

        console.log(axisValues);

        valueTopPlayers = axisValues.slice(0, 100);
        top_wages = wages.slice(0, 100);


        trace1 = [{
            // mode: "markers",
            type: "bar",
            x: valueTopPlayers,
            // y: ratings
            y: top_wages
            // text: ,
        }];

        layout1 = {
            title: "Correlation"
        } 

        Plotly.newPlot("bar", trace1, layout1);

    });

};


init();