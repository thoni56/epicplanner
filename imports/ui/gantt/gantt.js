import { Template } from 'meteor/templating';
import { drawChart } from 'meteor/rafaelhdr:google-charts';
import './gantt.html';


Template.gantt.onRendered(function () {

    chart = {
        target: 'chartDiv',
        type: 'Timeline',
        columns: [
            ['string', 'Term'],
            ['string', 'Name'],
            ['date', 'Start'],
            ['date', 'End']
        ],
        rows: [
            ['1', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
            ['2', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
            ['3', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
        ],
        options: {
            'height': 300
        }
    };

    drawChart(chart);
});
