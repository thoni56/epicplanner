import { Template } from 'meteor/templating';
import { Epics } from '../../api/epics';

import './epicsList.html';
import './epicItem.html';

Template.epicsList.helpers({
    epics() {
        return Epics.find({}, {"sort": { "order":1 }});
    }
});
