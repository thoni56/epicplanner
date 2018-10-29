import '../imports/ui/capacityPlan/capacityPlan';
import '../imports/ui/insertEpicModal';

import './main.css';
import './main.html';

Template.body.events({
    'click #add': function (e) {
        Modal.show('insertEpicModal');
    }
});