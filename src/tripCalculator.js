let drivers, trips, driverObjects

const getDrivers = (records) => {
    drivers = records.filter(r => r.startsWith('Driver'))
    console.log(`Drivers: ${drivers}`)
    
    return drivers
}

const getTrips = (records) => {
    trips = records.filter(r => r.startsWith('Trip'))
    console.log(`Trips: ${trips}`)
    return trips
}

const createDriverObjects = (drivers, delimiter = ' ') => {
    driverObjects = drivers.map(d => {
        const values = d.split(delimiter)
                        .slice(1,2)
        return values.reduce((obj, driver) => ((obj['driver'] = values[0]), obj), {});
    })
    return driverObjects
}

module.exports = {
    getDrivers: getDrivers,
    getTrips: getTrips,
    createDriverObjects: createDriverObjects,
}