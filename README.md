# RootDrivers
JS implementation of the Root coding problem

## Background
Import trip data from a file and generate a report to track driving history for people.

The trip business rules:

- trips never go past midnight
- start time always happens before end time
- discard any trips that are less than 5 mph or greater than 100 mph

## Output
- a report containing each driver with total miles and average speed
- sort drivers by most miles driven to least
- round miles and miles per hour to the nearest integer

## Feature
*As an insurance provider<br>
I want to genarate a report to track driving history for people<br>
So that, I can provide them with the appropriate policy<br>*

## Usage
To run the application you must have `node 10` or higher installed.

Install npm packages `npm install`. Then run `npm test` to run tests.

Place your source file in the `data` folder of the application.

## Sample command:

`node app --fileName input.txt`

Change the source file for different outcome.