var assert = require("assert");
var Calculate =  require('../factorial.js')

describe('Calculate', () => {
  describe('.factorial', () => {

    it('returns 120 for 5!', () => {
      const expectedFactorial = 120;
      const inputNumber = 5

      const actualFactorial = Calculate.factorial(inputNumber)

      assert.equal(expectedFactorial, actualFactorial)
    })

    it('returns 6 for 3!', () => {
      const expectedFactorial = 6;
      const inputNumber = 3

      const actualFactorial = Calculate.factorial(inputNumber)

      assert.equal(expectedFactorial, actualFactorial)
    })

    it('returns 1 for 0!', () => {
      const expectedFactorial = 1;
      const inputNumber = 0

      const actualFactorial = Calculate.factorial(inputNumber)

      assert.equal(expectedFactorial, actualFactorial)
    })

  });
});