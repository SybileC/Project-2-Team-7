Plotly.d3.csv('/data/top_players.csv', function (err, data) {
    let xVals = []
    let yVals = []

    for (var i = 0; i < data.length; i++) {
        xVals.push(data[i].nationality);
        yVals.push(data[i].wage_eur);
    }

    let trace = {
        x: xVals,
        y: yVals,
        marker: { color: "rgb(55, 83, 109)" },
        type: "bar"
    };

    let layout = {
        title: "FIFA2020 Player Nationaly and Wage",
        yaxis: { title: "Player Wage" },
        xaxis: { title: "Nationality" }
    }

    Plotly.newPlot("charts", [trace], layout);
})