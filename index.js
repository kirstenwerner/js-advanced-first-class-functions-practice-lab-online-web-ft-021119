// Code your solution in this file!
const nameCallback = function(element) {
  console.log(element.name);
};

function logDriverNames(collection) {
  collection.forEach(nameCallback);
};

function logDriversByHometown(collection, hometown) {
  const driverHometownArray = collection.filter(driver => driver['hometown'] === hometown);
  driverHometownArray.forEach(nameCallback);
};

function driversByRevenue(collection) {
  const driversByRev = [...collection];
  driversByRev.sort(function (a, b) {
    return a.revenue - b.revenue;
  })
  return driversByRev;
};

function driversByName(collection) {
  const sortedDrivers = [...collection];
  return sortedDrivers.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

function totalRevenue(collection) {
  let rev = 0;
  collection.forEach(function (collection) {
    rev += collection.revenue;
  });
  return rev;
}

function averageRevenue(collection) {
  return totalRevenue(collection) / collection.length
}
