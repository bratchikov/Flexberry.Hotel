import { Serializer as PersonSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hotel-person';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
