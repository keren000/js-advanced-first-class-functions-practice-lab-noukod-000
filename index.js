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

const driversByName = (driversName) => {
  return driversName.map( (element) => {
    return element;
  }).sort( function (d, e) {
    return d.name.localeCompare(e.name);
  })
};

function totalRevenue(drivers) {
  return drivers.reduce((arg, element) => {return arg + element.revenue}, 0)
}

const averageRevenue = (driver) =>{
  return totalRevenue(driver) / driver.length;
}
