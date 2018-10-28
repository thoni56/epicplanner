import { Template } from 'meteor/templating';
import { Epics } from '../../api/epics';

import './capacityPlan.html';

var ctx;
const scaleX = 1;
const scaleY = 10;

export var currentX;
export var currentY;

Template.capacityPlan.events({
    'click #draw'(event) {
        event.preventDefault();
        if (!ctx) ctx = getContext();
        clearCanvas();
        currentX = currentY = 0;
        var epics = Epics.find();
        epics.forEach(function (epic) {
            drawEpic(epic);
        })
    }
})

function drawEpic(epic) {
    draw(currentX, currentY, epic.effort, epic.height);
    currentY += epic.height;
}

function getContext() {
    const canvas = document.getElementById("planCanvas");
    return canvas.getContext("2d");
}

function draw(x, y, effort, height) {
    ctx.fillStyle = randomHsl();
    ctx.fillRect(x * scaleX, y * scaleY, effort / height, height * scaleY);
    ctx.stroke();
}

function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


// Adapted after https://stackoverflow.com/a/50569351/204658
function clearCanvas() {
    ctx.save();
    ctx.globalCompositeOperation = 'copy';
    ctx.strokeStyle = 'transparent';
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
  }