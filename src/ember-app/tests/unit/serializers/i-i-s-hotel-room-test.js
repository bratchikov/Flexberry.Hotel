import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-hotel-room', 'Unit | Serializer | i-i-s-hotel-room', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-hotel-room',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-hotel-person',
    'model:i-i-s-hotel-reservation',
    'model:i-i-s-hotel-room',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
