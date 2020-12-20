function init() {
    dropdownMenu = d3.select("#selDataset");

    d3.json("top_players.json").then(function(data) {

        preferred_foot = []

        for (var i = 0; i < data.length; i++) {
            foot = data[i]["preferred_foot"];
            
            preferred_foot.push(foot);
        
        }
        
        console.log(preferred_foot);
        
        
        for (let f in preferred_foot) {
            
            leftFoot = []
            rightFoot = []
        
            if (preferred_foot[f] == "Left") {
                lf = preferred_foot[f];
                leftFoot.push(lf);
            }
            else {
                rf = preferred_foot[f];
                rightFoot.push(rf);
            }
              
        }
        
        console.log(leftFoot);
        console.log(rightFoot);
       
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
        
        // console.log(playersAge);
        // console.log(ratings);
        // console.log(wages);

        top_playersAge = playersAge.slice(0, 100);
        top_rated = ratings.slice(0, 100);
        top_wages = wages.slice(0, 100);

        // console.log(top_playersAge);
        // console.log(top_wages);

        wageYAxis = [{
            type: "bar",
            x: top_playersAge,
            y: top_wages
            // text: ,
        }];

        ratingYAxis = [{
            // mode: "markers",
            type: "bar",
            x: top_playersAge,
            y: top_rated
            // text: ,
        }];

        // data = [wageYAxis, ratingYAxis];

        var frames = [
            {name: "Players' Wage", data: wageYAxis},
            {name: "Players' Rating", data: ratingYAxis}
          ];

    
        layout1 = {
            title: "Correlation"
        } 
    
        Plotly.newPlot("bar", wageYAxis, layout1);

        
        
        // Plotly.newPlot("bar", wageYAxis);
        
        // function animation() {
        //   Plotly.animate("bar", ratingYAxis, {
        //     transition: {
        //       duration: 500,
        //       easing: 'cubic-in-out'
        //     },
        //     frame: {
        //       duration: 500
        //     }
        //   })
        // };

        // Plotly.newPlot("bar", wageYAxis,
        //     {updatemenus: [{
        //       buttons: [
        //         {method: 'animate', args: [["Players' Wage"]], label: "Players' Wage"},
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