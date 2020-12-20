function buildCharts(sample) {
  d3.json(`/foot`).then((data) => {
    var right = data.Right
    var left = data.Left

  var total = right + left

      //build pie chart with left and right foot
      //build data
      var trace2 = {
        values: total,
        labels: left, right,
        type: 'pie',
        text: left, right,
        textinfo: 'percent',
        hoverinfo: 'label+text+value+percent'
    };
    var data2 = [trace2];

    //build layout
    var layout2 = {
        title: `Preferred Foot`,
    };

    //build plot
    Plotly.newPlot("pie", data2, layout2);
  });
}  