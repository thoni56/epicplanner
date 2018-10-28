import '../imports/ui/gantt/gantt';
import '../imports/ui/insertEpicModal';

import './main.html';

Template.body.events({
    'click #add': function (e) {
        Modal.show('insertEpicModal');
    }
});