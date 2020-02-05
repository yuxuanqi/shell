type = ['primary', 'info', 'success', 'warning', 'danger'];

overall = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },

  initDocChart: function() {
    chartColor = "#FFFFFF";

    // General configuration for the charts with Line gradientStroke
    gradientChartOptionsConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: true,
      scales: {
        yAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }],
        xAxes: [{
          display: 0,
          gridLines: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    };

    ctx = document.getElementById('lineChartExample').getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

//    gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
//    gradientFill.addColorStop(0, "rgba(0, 255, 153, 0)");
//    gradientFill.addColorStop(1, "rgba(0, 255, 153, 0.5)");

    myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Active Users",
          borderColor: "#f96332",
          pointBorderColor: "#FFF",
          pointBackgroundColor: "#f96332",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 1,
          pointRadius: 4,
          fill: true,
          backgroundColor: gradientFill,
          borderWidth: 2,
          data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  },

  initDashboardPageCharts: function(overall_gv_columns,overall_gv_buyable_percent,overall_gv_buyable_goal) {




    overallChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
        animation: {
//          duration: 10000,
          onComplete: function() {
            var chart = this.chart;
            var ctx = chart.ctx;

//            this.data.datasets.forEach(function(dataset, i) {
//              var meta = chart.controller.getDatasetMeta(i);
//              if (!meta.hidden) {
//                meta.data.forEach(function(element, index) {
//                  // Draw the text in black, with the specified font
//                  ctx.fillStyle = '#2dce89';
//                  var fontSize = 14;
//                  ctx.font = Chart.helpers.fontString(fontSize, 'normal', 'Helvetica Neue');
//
//                  // Just naively convert to string for now
//                  var dataString = Number((dataset.data[index]*100).toFixed(2)).toString()+'%';
//
//                  // Make sure alignment settings are correct
//                  ctx.textAlign = 'center';
//                  ctx.textBaseline = 'middle';
//
//                  var padding = 5;
//                  var position = element.tooltipPosition();
//                  ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
//                });
//              }
//            }
//
//
//            );
//},
              var dataset = this.data.datasets[0];
              var meta = chart.controller.getDatasetMeta(0);
              if (!meta.hidden) {
                meta.data.forEach(function(element, index) {
                  // Draw the text in black, with the specified font
                  ctx.fillStyle = '#2dce89';
                  var fontSize = 14;
                  ctx.font = Chart.helpers.fontString(fontSize, 'normal', 'Helvetica Neue');

                  // Just naively convert to string for now
                  var dataString = Number((dataset.data[index]*100).toFixed(2)).toString()+'%';

                  // Make sure alignment settings are correct
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';

                  var padding = 5;
                  var position = element.tooltipPosition();
                  ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding);
                });
              }
            }
          },


      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: Math.min.apply(this, overall_gv_buyable_percent)-0.005,
            suggestedMax: 1.0,
            padding: 0.01,
            fontColor: "#434343",
            callback: function (value) {
          return (value * 100).toFixed(0) + '%'; // convert it to percentage
        },
          },
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#434343"
          }
        }]
      }
    };


    var ctx = document.getElementById("overall_gv").getContext('2d');

    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(21,195,154,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(21,195,154,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(21,195,154,0)'); //green colors
    var myChart = new Chart(ctx, {
      type: 'line',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: overall_gv_columns,

        datasets: [{
          label: "Buyable asin overall gv%",
          fill: true,

          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#15c39a',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: overall_gv_buyable_percent,
        },
        {
          label: "Buyable asin overall gv goal%",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#fff',
          borderWidth: 1,
          borderDash: [5,15],
          borderDashOffset: 0.0,
          data: overall_gv_buyable_goal,

      }]},
     options: overallChartConfiguration
    });

  },

  showNotification: function(from, align) {
    color = Math.floor((Math.random() * 4) + 1);

    $.notify({
      icon: "tim-icons icon-bell-55",
      message: "Welcome to <b>Black Dashboard</b> - a beautiful freebie for every web developer."

    }, {
      type: type[color],
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};