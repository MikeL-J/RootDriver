const calculator = require('../src/tripCalculator.js')


describe('Trip Calculator', () => {

    let records, drivers, trips

    beforeEach(() => {
        records = [  
        'Driver Dan',
        'Driver Lauren',
        'Driver Kumi',
        'Trip Dan 07:15 07:45 17.3',
        'Trip Dan 06:12 06:32 21.8',
        'Trip Lauren 12:01 13:16 42.0',
        ]

        drivers = [
            'Driver Dan',
            'Driver Lauren',
            'Driver Kumi',
        ]

        trips = [
            'Trip Dan 07:15 07:45 17.3',
            'Trip Dan 06:12 06:32 21.8',
            'Trip Lauren 12:01 13:16 42.0',
        ]
    })

    it('seperates the drivers from the drivers', () => {
        const actual = calculator.getDrivers(records)
        
        expect(actual.length).toEqual(3)
        expect(actual).toEqual(drivers)
    })
    
    it('creates the objects for the trips', () => {
        const actual = calculator.getTrips(records)
        
        expect(actual.length).toEqual(3)
        expect(actual).toEqual(trips) 
    })

    // it('creates the objects for the trips', () => {
        
    // })

    // it('calculates the route time', () => {
    //     expect(true).toEqual(true)
    // })

    // it('calculates the speed in miles per hour' , () => {
    //     expect(true).toEqual(true)
    // })

    // it('it removes any trips less than 5 miles per hour' , () => {
    //     expect(true).toEqual(true)
    // })

    // it('it removes any trips greater than 100 miles per hour' , () => {
    //     expect(true).toEqual(true)
    // })


})