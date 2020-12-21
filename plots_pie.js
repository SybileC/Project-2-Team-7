function buildCharts() {

  d3.json("top_players.json").then((data) => {
      preferred_foot500 = [];
        for (var i = 0; i < data.length; i++) {
            foot = data[i]["preferred_foot"];
            preferred_foot500.push(foot);
        }
        console.log(preferred_foot500);

        leftFoot500 = []
        rightFoot500 = []
        for (let f in preferred_foot500) {
            if (preferred_foot500[f] === "Left") {
                lf = preferred_foot500[f];
                leftFoot500.push(lf);
            }
            else {
                rf = preferred_foot500[f];
                rightFoot500.push(rf);
            }
        }
        console.log(leftFoot500.length);
        console.log(rightFoot500.length);
      // -------------
        preferred_foot20 = preferred_foot500.slice(0,20)
        leftFoot20 = []
        rightFoot20 = []
        for (let f in preferred_foot20) {
            if (preferred_foot20[f] === "Left") {
                lf = preferred_foot20[f];
                leftFoot20.push(lf);
            }
            else {
                rf = preferred_foot20[f];
                rightFoot20.push(rf);
            }
          }

        preferred_foot100 = preferred_foot500.slice(0,100)
        leftFoot100 = []
        rightFoot100 = []
        for (let f in preferred_foot100) {
            if (preferred_foot100[f] === "Left") {
                lf = preferred_foot100[f];
                leftFoot100.push(lf);
            }
            else {
                rf = preferred_foot100[f];
                rightFoot100.push(rf);
            }
          }
        
    // ----------------------------------------
    //build pie chart with left and right foot
    //build data
    var trace500 = {
      values: [leftFoot500.length, rightFoot500.length],
      labels: ["left", "right"],
      type: 'pie',
      text: [leftFoot500.length, rightFoot500.length],
      marker: {
        colors: ["#f54242", "#4287f5"]
      },
      textinfo: 'percent',
      hoverinfo: 'label+text+value+percent'
    
    };

    var data500 = [trace500];

    //build layout
    var layout500 = {
        title: `Preferred Foot of Top 500 Players`,
    };

    //build plot
    Plotly.newPlot("pie", data500, layout500);


    // ----------------------------------------
    var trace20 = {
      values: [leftFoot20.length, rightFoot20.length],
      labels: ["left", "right"],
      type: 'pie',
      text: [leftFoot20.length, rightFoot20.length],
      marker: {
        colors: ["#f54242", "#4287f5"]
      },
      textinfo: 'percent',
      hoverinfo: 'label+text+value+percent'
    
    };

    var data20 = [trace20];

    //build layout
    var layout20 = {
        title: `Preferred Foot of Top 20 Players`,
    };

    //build plot
    Plotly.newPlot("pie20", data20, layout20);


    // ----------------------------------------
    var trace100 = {
      values: [leftFoot100.length, rightFoot100.length],
      labels: ["left", "right"],
      type: 'pie',
      text: [leftFoot100.length, rightFoot100.length],
      marker: {
        colors: ["#f54242", "#4287f5"]
      },
      textinfo: 'percent',
      hoverinfo: 'label+text+value+percent'
    
    };

    var data100 = [trace100];

    //build layout
    var layout100 = {
        title: `Preferred Foot of Top 100 Players`,
    };

    //build plot
    Plotly.newPlot("pie100", data100, layout100);
    
    


  })
        
}

buildCharts();