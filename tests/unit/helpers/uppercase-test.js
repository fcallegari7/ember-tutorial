import { setupTest } from 'super-rentals/tests/helpers';
import uppercase from 'super-rentals/helpers/uppercase';
import { module, test } from 'qunit';

module('Unit | Helper | uppercase', function (hooks) {
    setupTest(hooks);

    test('it transforms string to uppercase', function (assert) {
        let result = uppercase('hello');
        assert.strictEqual(result, 'HELLO');
    })
});