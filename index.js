// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromdriverByKey(driver, key) {
  const newDriver = Object.assign(driver);
  delete newDriver[key];
  return newDriver;
  return driver;
}
