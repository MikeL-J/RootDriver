const { join } = require('path')
const { readFile } = require('fs')
const { calculateRoutes } = require('./tripCalculator')

const getData = (fileName) => {
  const fileDir = __dirname.replace(`/src`, `/data`)
  const filePath = join(fileDir, fileName)
  console.log('*********' + filePath) 

  readFile(filePath, { encoding: 'utf8' }, (err, data) => {
    if (err) { throw err }

    console.log('\x1b[35m', data, '\x1b[0m')
    const records = data.toString().split("\n");
    console.log('\x1b[36m', records, '\x1b[0m')
    calculateRoutes(records)
  })
}

module.exports = {
  getData: getData,
}