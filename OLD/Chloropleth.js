trace1 = {
  meta: {columnNames: {
      z: 'nationality', 
      locations: 'country'
    }}, 
  mode: 'markers', 
  type: 'choropleth', 
  zsrc: 'joshua917:2:8ad7ce', 
  z: ['2', '2', '26', '1', '1', '4', '17', '3', '48', '3', '1', '3', '6', '1', '10', '3', '1', '6', '1', '1', '23', '1', '51', '1', '38', '1', '3', '1', '2', '1', '2', '31', '3', '1', '1', '5', '1', '1', '17', '1', '1', '1', '7', '28', '2', '2', '4', '10', '3', '4', '84', '3', '6', '1', '1', '1', '14', '1', '2'], 
  colorbar: {title: {text: '<br>'}}, 
  hoverinfo: 'location+z', 
  showscale: true, 
  colorscale: [['0', '#440154'], ['0.1111111111111111', '#482878'], ['0.2222222222222222', '#3e4989'], ['0.3333333333333333', '#31688e'], ['0.4444444444444444', '#26828e'], ['0.5555555555555556', '#1f9e89'], ['0.6666666666666666', '#35b779'], ['0.7777777777777778', '#6ece58'], ['0.8888888888888888', '#b5de2b'], ['1', '#fde725']], 
  hoverlabel: {
    align: 'auto', 
    namelength: 16
  }, 
  locationmode: 'country names', 
  locationssrc: 'joshua917:2:31936c', 
  locations: ['Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Belgium', 'Bosnia Herzegovina', 'Brazil', 'Cameroon', 'Central African Rep.', 'Chile', 'Colombia', 'Costa Rica', 'Croatia', 'Czech Republic', 'DR Congo', 'Denmark', 'Ecuador', 'Egypt', 'England', 'Finland', 'France', 'Gabon', 'Germany', 'Ghana', 'Greece', 'Guinea', 'Hungary', 'Iceland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Korea Republic', 'Mexico', 'Montenegro', 'Morocco', 'Netherlands', 'Nigeria', 'Norway', 'Paraguay', 'Poland', 'Portugal', 'Russia', 'Scotland', 'Senegal', 'Serbia', 'Slovakia', 'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Togo', 'Turkey', 'Ukraine', 'Uruguay', 'Venezuela', 'Wales'], 
  hovertemplate: '', 
  autocolorscale: false
};
data = [trace1];
layout = {
  geo: {
    center: {
      lat: 6.857861835226386, 
      lon: 9.937029598994442
    }, 
    projection: {
      scale: 1.158101600301154, 
      rotation: {lon: 9.937029598994442}
    }
  }, 
  title: {text: 'CHLOROPLETH VISUAL OF WHERE PLAYERS COME FROM'}, 
  xaxis: {
    range: [-1, 6], 
    autorange: true
  }, 
  yaxis: {
    range: [-1, 4], 
    autorange: true
  }, 
  mapbox: {
    zoom: 1, 
    pitch: 0, 
    center: {
      lat: 21.7763824940116, 
      lon: -1.9373873580462941
    }, 
    bearing: 0
  }, 
  autosize: true, 
  template: {
    data: {
      bar: [
        {
          type: 'bar', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      table: [
        {
          type: 'table', 
          cells: {
            fill: {color: 'rgb(231,231,240)'}, 
            line: {color: 'white'}
          }, 
          header: {
            fill: {color: 'rgb(183,183,191)'}, 
            line: {color: 'white'}
          }
        }
      ], 
      carpet: [
        {
          type: 'carpet', 
          aaxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: 'rgb(36,36,36)', 
            minorgridcolor: 'white', 
            startlinecolor: 'rgb(36,36,36)'
          }, 
          baxis: {
            gridcolor: 'white', 
            linecolor: 'white', 
            endlinecolor: 'rgb(36,36,36)', 
            minorgridcolor: 'white', 
            startlinecolor: 'rgb(36,36,36)'
          }
        }
      ], 
      mesh3d: [
        {
          type: 'mesh3d', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }
        }
      ], 
      contour: [
        {
          type: 'contour', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      heatmap: [
        {
          type: 'heatmap', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      scatter: [
        {
          type: 'scatter', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      surface: [
        {
          type: 'surface', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }
        }
      ], 
      heatmapgl: [
        {
          type: 'heatmapgl', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }
        }
      ], 
      histogram: [
        {
          type: 'histogram', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      parcoords: [
        {
          line: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}, 
          type: 'parcoords'
        }
      ], 
      scatter3d: [
        {
          type: 'scatter3d', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      scattergl: [
        {
          type: 'scattergl', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      choropleth: [
        {
          type: 'choropleth', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }
        }
      ], 
      scattergeo: [
        {
          type: 'scattergeo', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2d: [
        {
          type: 'histogram2d', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ], 
      scatterpolar: [
        {
          type: 'scatterpolar', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      contourcarpet: [
        {
          type: 'contourcarpet', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }
        }
      ], 
      scattercarpet: [
        {
          type: 'scattercarpet', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      scattermapbox: [
        {
          type: 'scattermapbox', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      scatterpolargl: [
        {
          type: 'scatterpolargl', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      scatterternary: [
        {
          type: 'scatterternary', 
          marker: {colorbar: {
              ticks: 'outside', 
              ticklen: 8, 
              tickcolor: 'rgb(36,36,36)', 
              tickwidth: 2, 
              outlinewidth: 0
            }}
        }
      ], 
      histogram2dcontour: [
        {
          type: 'histogram2dcontour', 
          colorbar: {
            ticks: 'outside', 
            ticklen: 8, 
            tickcolor: 'rgb(36,36,36)', 
            tickwidth: 2, 
            outlinewidth: 0
          }, 
          autocolorscale: true
        }
      ]
    }, 
    layout: {
      geo: {
        bgcolor: 'white', 
        showland: true, 
        lakecolor: 'white', 
        landcolor: 'rgb(234,234,242)', 
        showlakes: true, 
        subunitcolor: 'white'
      }, 
      font: {color: 'rgb(36,36,36)'}, 
      polar: {
        bgcolor: 'rgb(234,234,242)', 
        radialaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        angularaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          linecolor: 'white'
        }
      }, 
      scene: {
        xaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: 'rgb(234,234,242)'
        }, 
        yaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: 'rgb(234,234,242)'
        }, 
        zaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          gridwidth: 2, 
          linecolor: 'white', 
          zerolinecolor: 'white', 
          showbackground: true, 
          backgroundcolor: 'rgb(234,234,242)'
        }
      }, 
      xaxis: {
        ticks: '', 
        showgrid: true, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white'
      }, 
      yaxis: {
        ticks: '', 
        showgrid: true, 
        gridcolor: 'white', 
        linecolor: 'white', 
        automargin: true, 
        zerolinecolor: 'white'
      }, 
      ternary: {
        aaxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        baxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        caxis: {
          ticks: '', 
          showgrid: true, 
          gridcolor: 'white', 
          linecolor: 'white'
        }, 
        bgcolor: 'rgb(234,234,242)'
      }, 
      colorway: ['rgb(76,114,176)', 'rgb(221,132,82)', 'rgb(85,168,104)', 'rgb(196,78,82)', 'rgb(129,114,179)', 'rgb(147,120,96)', 'rgb(218,139,195)', 'rgb(140,140,140)', 'rgb(204,185,116)', 'rgb(100,181,205)'], 
      hovermode: 'closest', 
      colorscale: {
        diverging: [['0', '#67001f'], ['0.1', '#b2182b'], ['0.2', '#d6604d'], ['0.3', '#f4a582'], ['0.4', '#fddbc7'], ['0.5', '#f7f7f7'], ['0.6', '#d1e5f0'], ['0.7', '#92c5de'], ['0.8', '#4393c3'], ['0.9', '#2166ac'], ['1', '#053061']], 
        sequential: [['0', 'rgb(2,4,25)'], ['0.06274509803921569', 'rgb(24,15,41)'], ['0.12549019607843137', 'rgb(47,23,57)'], ['0.18823529411764706', 'rgb(71,28,72)'], ['0.25098039215686274', 'rgb(97,30,82)'], ['0.3137254901960784', 'rgb(123,30,89)'], ['0.3764705882352941', 'rgb(150,27,91)'], ['0.4392156862745098', 'rgb(177,22,88)'], ['0.5019607843137255', 'rgb(203,26,79)'], ['0.5647058823529412', 'rgb(223,47,67)'], ['0.6274509803921569', 'rgb(236,76,61)'], ['0.6901960784313725', 'rgb(242,107,73)'], ['0.7529411764705882', 'rgb(244,135,95)'], ['0.8156862745098039', 'rgb(245,162,122)'], ['0.8784313725490196', 'rgb(246,188,153)'], ['0.9411764705882353', 'rgb(247,212,187)'], ['1', 'rgb(250,234,220)']], 
        sequentialminus: [['0', 'rgb(2,4,25)'], ['0.06274509803921569', 'rgb(24,15,41)'], ['0.12549019607843137', 'rgb(47,23,57)'], ['0.18823529411764706', 'rgb(71,28,72)'], ['0.25098039215686274', 'rgb(97,30,82)'], ['0.3137254901960784', 'rgb(123,30,89)'], ['0.3764705882352941', 'rgb(150,27,91)'], ['0.4392156862745098', 'rgb(177,22,88)'], ['0.5019607843137255', 'rgb(203,26,79)'], ['0.5647058823529412', 'rgb(223,47,67)'], ['0.6274509803921569', 'rgb(236,76,61)'], ['0.6901960784313725', 'rgb(242,107,73)'], ['0.7529411764705882', 'rgb(244,135,95)'], ['0.8156862745098039', 'rgb(245,162,122)'], ['0.8784313725490196', 'rgb(246,188,153)'], ['0.9411764705882353', 'rgb(247,212,187)'], ['1', 'rgb(250,234,220)']]
      }, 
      plot_bgcolor: 'rgb(234,234,242)', 
      paper_bgcolor: 'white', 
      shapedefaults: {
        line: {width: 0}, 
        opacity: 0.5, 
        fillcolor: 'rgb(67,103,167)'
      }, 
      annotationdefaults: {arrowcolor: 'rgb(67,103,167)'}
    }, 
    themeRef: 'SEABORN'
  }
};
Plotly.plot('plotly-div', {
  data: data,
  layout: layout
});