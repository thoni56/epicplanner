import { Template } from 'meteor/templating';
import { Epics } from '../../api/epics';
import '../epic/epic';

import './epicsList.html';

Template.epicsList.helpers({
    epics() {
        return Epics.find();
    }
});
