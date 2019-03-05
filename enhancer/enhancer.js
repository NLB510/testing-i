const enhancer = {
  success: function(item) {
    // switch(item.enhancement) {
    //   case 16
    // }
  },

  fail: function(item) {

    if (item.enhancement < 15 && item.durability < 25) {
      return { ...item };
    }

    const durability = item.enhancement < 15 ? item.durability - 5 : item.durability -10

    const enhancement = item.enhancement > 16 ? item.enhancement - 1 : item.enhancement


    return {...item, durability, enhancement}
    

    

  },

  repair: function(item) {
    item.durability = 100;
    return item;
  }
};

module.exports = {
  enhancer
};
