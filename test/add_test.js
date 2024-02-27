/* 
import assert 
Check for loose (==) equality with assert.equal()
Check for strict (===) equality with assert.strictEqual()
Check the equality of two object’s values with assert.deepEqual()
*/

const assert = require('assert')

describe('+', () => {
  it('returns the sum of its arguments', () => {
    // Write assertion here
    assert.ok(3 + 4 === 7)

  });

  it('returns the sum of two object values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });

  it('returns the sum of two array values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(sum[0] + sum[1]);

    // Verify
    assert.deepEqual(sum, expected);
  });

});
