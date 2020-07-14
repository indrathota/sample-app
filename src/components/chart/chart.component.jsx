import React, { Component } from "react";
import { Chart } from "chart.js";

export class LineChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    const node = this.node;
    var myChart = new Chart(node, {
      type: "line",
      data: {
        labels: [
          1920,
          1930,
          1940,
          1950,
          1960,
          1970,
          1980,
          1990,
          2000,
          2010,
          2020,
        ],
        datasets: [
          {
            data: [5, 16, 18, 25, 41, 34, 44, 48, 53, 58, 61],
            borderWidth: 2,
            label: "Population",
            backgroundColor: "rgba(79, 84, 252, 0.1)",
            borderColor: "rgba(79, 84, 252)",
            pointHitRadius: 0,
            pointBorderWidth: 0,
            pointStyle: "circle",
            pointRadius: 3,
          },
        ],
      },
      options: {
        animation: {
          easing: "easeInOutQuart",
          duration: 3000,
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                drawOnChartArea: false,
                color: "rgba(255,255,255,0.6)",
              },
              scaleLabel: {
                display: true,
                lineHeight: 2,
                fontColor: "#ffffff",
              },
              ticks: {
                beginAtZero: false,
                fontColor: "#FFFFFF",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                drawOnChartArea: false,
                color: "rgba(255,255,255,0.6)",
              },
              scaleLabel: {
                display: true,
                fontColor: "#FFFFFF",
              },
              ticks: {
                beginAtZero: false,
                fontColor: "#FFFFFF",
              },
            },
          ],
        },
      },
    });
    console.log(myChart);
  }
  render() {
    return <canvas ref={(node) => (this.node = node)}></canvas>;
  }
}
