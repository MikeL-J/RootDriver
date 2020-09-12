const { getData } = require('./src/fileProcessor')

if (!process.argv.includes("--fileName")) {
    console.log('Please include the --fileName parameter')
    console.log('Example: node app --fileName input.txt')

    process.exit(1)
}

let getArgValue = (argName) => {
    let index = process.argv.indexOf(argName)
    return (index === -1) ? null : process.argv[index+1]
}

let fileName = getArgValue('--fileName')

getData(fileName)
