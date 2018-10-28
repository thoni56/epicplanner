import { Template } from 'meteor/templating';
import { Epics } from '../api/epics';

import './insertEpicModal.html';

Template.insertEpicModal.helpers({
    epics: function() {
        return Epics;
    }
});