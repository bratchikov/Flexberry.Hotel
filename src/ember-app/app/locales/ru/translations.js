import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Hotel',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Hotel',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Hotel',
          title: 'Hotel'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        hotel: {
          caption: 'Hotel',
          title: 'Hotel',
          'i-i-s-hotel-room-l': {
            caption: 'Room',
            title: ''
          },
          'i-i-s-hotel-person-l': {
            caption: 'Person',
            title: ''
          },
          'i-i-s-hotel-reservation-l': {
            caption: 'Reservation',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
