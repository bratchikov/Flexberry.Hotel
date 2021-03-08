import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  comment: DS.attr('string'),
  startDate: DS.attr('date', { defaultValue() { return new Date(); } }),
  endDate: DS.attr('date'),
  person: DS.belongsTo('i-i-s-hotel-person', { inverse: null, async: false }),
  room: DS.belongsTo('i-i-s-hotel-room', { inverse: null, async: false })
});

export let ValidationRules = {
  comment: {
    descriptionKey: 'models.i-i-s-hotel-reservation.validations.comment.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  startDate: {
    descriptionKey: 'models.i-i-s-hotel-reservation.validations.startDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  endDate: {
    descriptionKey: 'models.i-i-s-hotel-reservation.validations.endDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  person: {
    descriptionKey: 'models.i-i-s-hotel-reservation.validations.person.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  room: {
    descriptionKey: 'models.i-i-s-hotel-reservation.validations.room.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ReservationE', 'i-i-s-hotel-reservation', {
    comment: attr('Comment', { index: 0 }),
    startDate: attr('Start date', { index: 1 }),
    endDate: attr('End date', { index: 2 }),
    person: belongsTo('i-i-s-hotel-person', 'Person', {
      name: attr('Name', { index: 4 })
    }, { index: 3 }),
    room: belongsTo('i-i-s-hotel-room', 'Room', {
      description: attr('Description', { index: 6 })
    }, { index: 5 })
  });

  modelClass.defineProjection('ReservationL', 'i-i-s-hotel-reservation', {
    comment: attr('Comment', { index: 0 }),
    startDate: attr('Start date', { index: 1 }),
    endDate: attr('End date', { index: 2 }),
    person: belongsTo('i-i-s-hotel-person', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true }),
    room: belongsTo('i-i-s-hotel-room', 'Description', {
      description: attr('Description', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
