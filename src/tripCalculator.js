
const getDrivers = (records) => {
    const drivers = records.filter(r => r.includes('Driver'))
    console.log(`Drivers: ${drivers}`)
    return drivers
}

const getTrips = (records) => {
    const trips = records.filter(r => r.includes('Trip'))
    console.log(`Trips: ${trips}`)
    return trips
}


module.exports = {
    getDrivers: getDrivers,
    getTrips: getTrips,
}