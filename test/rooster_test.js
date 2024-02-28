// import modules
const assert = require('assert')
const Rooster = require('../src/rooster.js')

describe('Rooster', () => {

  describe('.announceDawn', () => {

    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!'
      let actual;
      
      // Execute
      actual = Rooster.announceDawn()

      // Verify
      assert.equal(expected, actual);

    })

  })

  describe('.timeAtDawn', () => {
    before(() => {
      let hour;
      let timeAtDawn;
    })

    it('returns its argument as a string', () => {
      // Setup
      hour = 6;
      
      // Execute
      timeAtDawn = Rooster.timeAtDawn(hour);

      // Verify
      assert.strictEqual('6', timeAtDawn)

    })

    it('throws a range error if hour is less than 0', () => {
      // Setup
      hour = -1;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError)
      
    })

    it('throws an error if hour is greater than 23', () => {
      // Setup
      hour = 24;

      // Verify
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError)
      
    })

  })

})