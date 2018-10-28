import '../imports/ui/capacityPlan/capacityPlan';
import '../imports/ui/epicsList/epicsList';
import '../imports/ui/insertEpicModal';

import './main.html';

Template.body.events({
    'click #add': function (e) {
        Modal.show('insertEpicModal');
    }
});