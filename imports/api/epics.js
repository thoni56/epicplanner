import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schemas } from '../ui/common/schemas';

export const Epics = new Mongo.Collection('Epics');

SimpleSchema.extendOptions(['autoform']);

Schemas.Epics = new SimpleSchema({
    key: {
        type: String,
        label: "Key",
        max: 50
    },
    title: {
        type: String,
        label: "Title",
        max: 200,
        optional: true
    },
    effort: {
        type: Number,
        label: "Effort",
    },
    height: {
        type: Number,
        label: "Height",
        defaultValue: 1
    },
    color: {
        type: String,
        autoValue: function () {
            return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
        }
    }
});

Epics.attachSchema(Schemas.Epics);
