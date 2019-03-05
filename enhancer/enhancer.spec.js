const {
  enhancer: { success, repair, fail }
} = require("./enhancer");

describe("enhancer.js", () => {
  describe("Success()", () => {
    it(`should not fail and only increase enhancement by 1`, () => {
      const item = {
        displayName: "TestName",
        enhancement: 12,
        durability: 10
      };

      expect(fail(item)).toEqual(item);
      expect(success(item).enhancement).toEqual(13);
      expect(success(item).displayName).toEqual('[+13] TestName');
    });

    it('enhancement should not exceed 20/PEN', () => {
      const item = {
        displayName: "TestName",
        enhancement: 20,
        durability: 10
      };

      expect(success(item)).toEqual(item)
      

    })



  });

  describe("Fail()", () => {
    // The durability decreased by 5 if the item's enhancement is btw 0 -15

    it("Durability decreases by 5 if enhancement is between 0 and 14", () => {
      // Arrange (setup)
      const item = {
        enhancement: 14,
        durability: 85
      };

      // Act
      const actual = fail(item);

      //Assert
      expect(actual.durability).toBe(80);
    });

    it("Durability decreases by 10 if enhancement is greater than 15", () => {
      // Arrange (setup)
      const item = {
        enhancement: 16,
        durability: 85
      };

      // Act
      const actual = fail(item);

      //Assert
      expect(actual.durability).toBe(75);
    });

    it("should not affect item if enhancement is less than 15 and the durability is below 25", () => {
      const item = {
        enhancement: 14,
        durability: 24
      };

      expect(fail(item)).toEqual(item);
    });

    it("should not affect item if enhancement is higher than 15 and the durability is below 10", () => {
      const item = {
        enhancement: 16,
        durability: 9
      };

      expect(fail(item)).toEqual(item);
    });

    it("enhancement should decrease by 1 if enhancement is greater than 16", () => {
      const item = {
        enhancement: 17,
        durability: 18
      };

      const actual = fail(item);

      expect(actual.enhancement).toEqual(16);
    });

    it("name should update if enhancement level is decreased", () => {
      const item = {
        displayName: "Test",
        enhancement: 20,
        durability: 18
      };

      const actual = fail(item);

      expect(actual.displayName).toEqual(`[TET] Test`);
    });
  });

  describe('Repair()', () => {
    it('should repair durability to 100', () => {
      item = {
        durability: 30
      }

      expect(repair(item).durability).toEqual(100)

    })
  })


});
