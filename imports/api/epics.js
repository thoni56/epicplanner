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
    importance: {
        type: Number,
        label: false,
        autoValue: function () { return 0; },
        autoform: {
            afFieldInput: {
                type: "hidden"
            }
        }
    },
    color: {
        type: String,
        label: false,
        autoValue: function () {
            return 'hsla(' +
                (360 * Math.random()) + ', ' +
                (25 + 70 * Math.random()) + '% ,' +
                (85 + 10 * Math.random()) + '%)';
        },
        autoform: {
            afFieldInput: {
                type: "hidden"
            }
        }
    }
});

Epics.attachSchema(Schemas.Epics);
