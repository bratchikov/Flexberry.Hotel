import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  floor: DS.attr('number'),
  number: DS.attr('number'),
  description: DS.attr('string')
});

export let ValidationRules = {
  floor: {
    descriptionKey: 'models.i-i-s-hotel-room.validations.floor.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  number: {
    descriptionKey: 'models.i-i-s-hotel-room.validations.number.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  description: {
    descriptionKey: 'models.i-i-s-hotel-room.validations.description.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('RoomE', 'i-i-s-hotel-room', {
    number: attr('Number', { index: 0 }),
    floor: attr('Floor', { index: 1 }),
    description: attr('Description', { index: 2 })
  });

  modelClass.defineProjection('RoomL', 'i-i-s-hotel-room', {
    number: attr('Number', { index: 0 }),
    floor: attr('Floor', { index: 1 }),
    description: attr('Description', { index: 2 })
  });
};
