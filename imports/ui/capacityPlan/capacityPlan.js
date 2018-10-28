import { Template } from 'meteor/templating';

import './capacityPlan.html';

Template.capacityPlan.onRendered(function() {
    const canvas = document.getElementById("planCanvas");
    const ctx = canvas.getContext("2d");
    ctx.rect(20,20,150,150);
    ctx.stroke();
})