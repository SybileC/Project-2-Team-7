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
            ratings.push(overall);
            wages.push(wage);
   
        }
        
        top_playersAge = playersAge.slice(0, 100);
        top_rated = ratings.slice(0, 100);
        top_wages = wages.slice(0, 100);


        wageYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_wages,
            text: top_wages,
            marker: {
                color: '#f54242'
              }
        }];

        ratingYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_rated,
            text: top_rated,
            marker: {
                color: '#4287f5'
              }
        }];

    
        layout1 = {
            xaxis: {
                title: "age"
            },
            yaxis: {title:"Players' Wage"
        }
        };
        

        layout2 = {
            xaxis: {
                title: "age"
            },
            yaxis: {title:"Players' Rating"
        }
        };
    
        Plotly.newPlot("barOverall", ratingYAxis, layout1);

        Plotly.newPlot("barWage", wageYAxis, layout2);


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
        ratings = []
        wages = []

        for (var i = 0; i < data.length; i++) {
            x = data[i][xAxis];
            overall = data[i]["overall"];
            wage = data[i]["wage_eur"];
            
            axisValues.push(x);
            ratings.push(overall);
            wages.push(wage);

        }

        console.log(axisValues);

        valueTopPlayers = axisValues.slice(0, 100);
        top_rated = ratings.slice(0, 100);
        top_wages = wages.slice(0, 100);


        wageYAxis = [{
            type: "bar",
            x: valueTopPlayers,
            y: top_wages,
            text: top_wages,
            marker: {
                color: '#f54242'
              }
        }];

        ratingYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_rated,
            text: top_rated,
            marker: {
                color: '#4287f5'
              }
        }];

        layout1 = {
            xaxis: {
                title: `${xAxis}`
            },
            yaxis: {title:"Players' Wage"
        }
        };
        

        layout2 = {
            xaxis: {
                title: `${xAxis}`
            },
            yaxis: {title:"Players' Rating"
        }
        };

        Plotly.newPlot("barOverall", ratingYAxis, layout1);
        Plotly.newPlot("barWage", wageYAxis, layout2);

    });

};


init();