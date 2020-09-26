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

    let keys = ['type', 'driverName', 'startTime', 'endTime', 'miles'];
    const delimiter = ' '

    let values = records.map(r => {
        return r.split(delimiter)
      })

    let json = values.map(v => {
        return v.map((obj,index) => {
          var myobj = {}
          myobj[keys[index]] = obj
          return myobj
        })
      })

    json = json.map(r => {
      return r.reduce((result, item) => {
        var key = Object.keys(item)[0]
        result[key] = item[key]
        return result
      }, {})
    })

      console.log(json)
  })

  //calculateRoutes(json)

}

module.exports = {
  getData: getData,
}
