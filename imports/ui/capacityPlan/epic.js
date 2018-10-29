import { Template } from 'meteor/templating';

import './epic.html';

var currentY = 0;
const scaleX = 1;
const scaleY = 40;

Template.epic.helpers({
    geometry() {
        const s = "height: " + height(this.height) + "px; width: " + length(this.effort/this.height) + "px;";
        return s;
    }
})

function height(h) {
    currentY += h*scaleY;
    return h*scaleY;
}

function length(w) {
    return w*scaleX;
}

