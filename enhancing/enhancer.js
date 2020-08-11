module.exports = {
  success,
  fail,
  repair,
  get,
};

function repair(item) {
  let newItem = { ...item };
  newItem.durability = 100;
  return newItem;
}

function success(item) {
  let newItem = { ...item };
  newItem.enhancement !== 20 ? (newItem.enhancement += 1) : null;
  return newItem;
}

function fail(item) {
  let newItem = { ...item };
  if (newItem.enhancement < 15) {
    newItem.durability -= 5;
  } else if (newItem.enhancement > 16) {
    newItem.durability -= 10;
    newItem.enhancement -= 1;
  } else if (newItem.enhancement >= 15) {
    newItem.durability -= 10;
  }
  return newItem;
}

function get(item) {
  return { ...item };
}
