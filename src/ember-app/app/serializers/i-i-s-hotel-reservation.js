import { Serializer as ReservationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-reservation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ReservationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
