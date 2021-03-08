import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHotelPersonLForm from './forms/i-i-s-hotel-person-l';
import IISHotelReservationLForm from './forms/i-i-s-hotel-reservation-l';
import IISHotelRoomLForm from './forms/i-i-s-hotel-room-l';
import IISHotelPersonEForm from './forms/i-i-s-hotel-person-e';
import IISHotelReservationEForm from './forms/i-i-s-hotel-reservation-e';
import IISHotelRoomEForm from './forms/i-i-s-hotel-room-e';
import IISHotelPersonModel from './models/i-i-s-hotel-person';
import IISHotelReservationModel from './models/i-i-s-hotel-reservation';
import IISHotelRoomModel from './models/i-i-s-hotel-room';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-hotel-person': IISHotelPersonModel,
    'i-i-s-hotel-reservation': IISHotelReservationModel,
    'i-i-s-hotel-room': IISHotelRoomModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        hotel: {
          caption: 'hotel',
          title: 'hotel',
          'i-i-s-hotel-room-l': {
            caption: 'i-i-s-hotel-room-l',
            title: 'i-i-s-hotel-room-l'
          },
          'i-i-s-hotel-person-l': {
            caption: 'i-i-s-hotel-person-l',
            title: 'i-i-s-hotel-person-l'
          },
          'i-i-s-hotel-reservation-l': {
            caption: 'i-i-s-hotel-reservation-l',
            title: 'i-i-s-hotel-reservation-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-hotel-person-l': IISHotelPersonLForm,
    'i-i-s-hotel-reservation-l': IISHotelReservationLForm,
    'i-i-s-hotel-room-l': IISHotelRoomLForm,
    'i-i-s-hotel-person-e': IISHotelPersonEForm,
    'i-i-s-hotel-reservation-e': IISHotelReservationEForm,
    'i-i-s-hotel-room-e': IISHotelRoomEForm
  },

});

export default translations;
