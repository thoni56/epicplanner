import { Template } from 'meteor/templating';

import './capacityPlan.html';
import { Epics } from '../../api/epics';

var ctx;
const scale = 20;

Template.capacityPlan.onRendered(function () {
    const canvas = document.getElementById("planCanvas");
    ctx = canvas.getContext("2d");
    draw(20, 10, 150, 1);
})

Template.capacityPlan.helpers({
    epics() { return Epics.find(); },
    drawEpic() {
        console.log(this);
    }
})

function draw(x, y, effort, height) {
    ctx.fillStyle = randomHsl();
    ctx.fillRect(x, y, effort / height, height * scale);
    ctx.stroke();
}

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}