module.exports = {
  repair
}


function repair(item) {
  if (item) {
    item.durability = 100
  }

  return item
}