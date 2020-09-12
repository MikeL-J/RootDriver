const { getData } = require('../src/fileProcessor.js')
const { readFile } = require('fs').promises

describe.skip('File processor', () => {
    it('imports the trip data', () => {
        
        expect(true).toEqual(true)
    })

    it('reads the file', () => {
        const spy = jest.spyOn(getData('testFile.txt'))
        .mockImplementation((_, callback) => callback(null, Buffer.from('Sample')))

        // Calling the function
        read('./testFile')

        expect(spy).toHaveBeenCalled();
    })
})