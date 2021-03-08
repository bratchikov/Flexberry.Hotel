import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-hotel-person-l');
  this.route('i-i-s-hotel-person-e',
  { path: 'i-i-s-hotel-person-e/:id' });
  this.route('i-i-s-hotel-person-e.new',
  { path: 'i-i-s-hotel-person-e/new' });
  this.route('i-i-s-hotel-reservation-l');
  this.route('i-i-s-hotel-reservation-e',
  { path: 'i-i-s-hotel-reservation-e/:id' });
  this.route('i-i-s-hotel-reservation-e.new',
  { path: 'i-i-s-hotel-reservation-e/new' });
  this.route('i-i-s-hotel-room-l');
  this.route('i-i-s-hotel-room-e',
  { path: 'i-i-s-hotel-room-e/:id' });
  this.route('i-i-s-hotel-room-e.new',
  { path: 'i-i-s-hotel-room-e/new' });
});

export default Router;
