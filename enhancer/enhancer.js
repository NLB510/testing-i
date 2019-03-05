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

    if (item.enhancement >= 15 && item.durability < 10) {
      return {...item};
    }

    const durability =
      item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

    const enhancement =
      item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;
  
    // const displayName = enhancement < item.enhancement ? `${enhanceLevels[enhancement]} ${displayName}` : item.displayName

    return { ...item, durability, enhancement };
  },

  repair: function(item) {
    item.durability = 100;
    return item;
  }
};


const enhanceLevels = {
  1: "[+1]",
  2: "[+2]",
  3: "[+3]",
  4: "[+4]",
  5: "[+5]",
  6: "[+6]",
  7: "[+7]",
  8: "[+8]",
  9: "[+9]",
  10: "[+10]",
  11: "[+11]",
  12: "[+12]",
  13: "[+13]",
  14: "[+14]",
  15: "[+15]",
  16: "[PRI]",
  17: "[DUO]",
  18: "[TRI]",
  19: "[TET]",
  20: "[PEN]"
};



module.exports = {
  enhancer
};
