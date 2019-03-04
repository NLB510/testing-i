const {repair} = require('./enhancer')

describe('enhancer.js', () => {

  describe('repair()', () => {
    test('repairs durability of an item to 100', () => {
      const item = {
        name: 'TestItem',
        type: 'weapon',
        durability: 80,
        enhancement: 12,
        displayName: '[+12] TestItem'
      }

      const expected = {
        ...item,
        durability: 100
      }

      expect(repair(item)).toEqual(expected)

    })
  })



})