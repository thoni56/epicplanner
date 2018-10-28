import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Schemas } from '../ui/common/schemas';

export const Epics = new Mongo.Collection('Epics');

SimpleSchema.extendOptions(['autoform']);

Schemas.Epics = new SimpleSchema({
    id: {
        type: String,
        label: "Id",
        max: 200
    },
    effort: {
        type: Number,
        label: "Effort",
    },
    height: {
        type: Number,
        label: "Height",
        defaultValue: 1
    }
});

Epics.attachSchema(Schemas.Epics);
