import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('reservation', 'Reservations');
inflector.irregular('person', 'Persons');
inflector.irregular('room', 'Rooms');

export default {};
