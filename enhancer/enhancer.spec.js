const {
  enhancer: { success, repair, fail }
} = require("./enhancer");

describe("enhancer.js", () => {
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

    it('enhancement should decrease by 1 if enhancement is greater than 16', () => {
      const item = {
        enhancement: 17,
        durability: 18
      }

      const actual = fail(item)

      expect(actual.enhancement).toEqual(16)


    })


    // it('name should update if enhancement level is decreased', () => {
    //   const item = {
    //     enhancement: 16,

    //   }
    // })


  });
});
