import { Template } from 'meteor/templating';
import Chart from 'chart.js';

import './gantt.html';

var myChart;

Template.gantt.onRendered(function () {
    let ctx = document.getElementById("ganttDiv").getContext("2d");
    myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                // Start
                data: [500, 150, 300, 400, 500],
                backgroundColor: "rgba(63,103,126,0)",
            }, {
                data: [1000, 100, 200, 200, 100],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
            }]
        },
        options: barOptions_stacked
    })
});

var barOptions_stacked = {
    hover: {
        animationDuration: 5
    },
    scales: {
        xAxes: [{
            label: "Duration",
            ticks: {
                beginAtZero: true,
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize: 11
            },
            scaleLabel: {
                display: false
            },
            gridLines: {
            },
            stacked: true
        }],
        yAxes: [{
            gridLines: {
                display: false,
                color: "#fff",
                zeroLineColor: "#fff",
                zeroLineWidth: 0
            },
            ticks: {
                fontFamily: "'Open Sans Bold', sans-serif",
                fontSize: 11
            },
            stacked: true
        }]
    },
    legend: {
        display: false
    },
};
