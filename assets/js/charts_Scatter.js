Plotly.d3.csv('/data/top_players.csv', function (err, data) {
    let xVals = []
    let yVals = []

    for (var i = 0; i < data.length; i++) {
        xVals.push(data[i].nationality);
        yVals.push(data[i].wage_eur);
    }
    // var sorted = yVals.sort(function sortFunction(a, b) {
    //     return b - a;
    //   });

    // var topYval = sorted.slice(0, 20);
    //   });

    let trace = {
        x: xVals,
        y: yVals,
        marker: { color: "rgb(55, 83, 109)" },
        type: "scatter",
        mode: "markers"
    };

    let layout = {
        title: "FIFA2020 Player Nationality and Wage",
        yaxis: { title: "Player Wage" },
        xaxis: { title: "Nationality" }
    }

    Plotly.newPlot("charts", [trace], layout);
})