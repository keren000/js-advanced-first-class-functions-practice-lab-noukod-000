// Code your solution in this file!
const logDriverNames = (drivers) => {
  drivers.forEach( (element) => {
    console.log(element.name)
  });
};

const logDriversByHometown = (drivers, hometown) => {
  logDriverNames(drivers.filter( (element) => {
    return element.hometown === hometown;
  }))
}

const driversByRevenue = (drivers) => {
  return drivers.map( (element) =>{
    return element
  }).sort( function (d, e) {
    return d.revenue - e.revenue;
  })
};

const driversByName = function (driversName) {
  return driversName.map( function (element) {
    return element;
  }).sort( function (d, e) {
    return d.name.localeCompare(e.name);
  })
};

// const sumRevenue = function (agg, el, i, arr) {
//   return agg + el.revenue;
// };
//

function totalRevenue(drivers) {
  return drivers.reduce((arg, element) => {return arg + element.revenue}, 0)
}

const averageRevenue = function (driver) {
  return totalRevenue(driver) / driver.length;
}
