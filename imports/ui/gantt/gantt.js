import { Template } from 'meteor/templating';
import { drawChart } from 'meteor/rafaelhdr:google-charts';
import './gantt.html';


Template.gantt.onRendered(function () {

    chart = {
        target: 'chartDiv',
        type: 'BarChart',
        columns: [
            ['string', 'Topping'],
            ['number', 'Slices']
        ],
        rows: [
            ['Mushrooms', 3],
            ['Onions', 1],
            ['Olives', 1],
            ['Zucchini', 1],
            ['Pepperoni', 2]
        ],
        options: {
            'title': 'How Much Pizza I Ate Last Night',
            'width': 400,
            'height': 300
        }
    };

    drawChart(chart);
});
