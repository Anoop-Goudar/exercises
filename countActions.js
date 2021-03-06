// Exercise 3

// There is an attached log file from one of the development web server. 

// Line number 2 of this log file is something like this "Processing by SprintsController#show as JSONAPI"

// This tells us, sprints controller's show action(method or function) ran. You have to parse this log file and output it the number of times the controller's actions run.

// Expected Output:

// SprintsController => show action ran 23 times
// SprintsController => index action ran 17 times
// and so on.


var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('development.log')
  });
var showCount = 0;
var indexCount = 0;
lineReader.on('line', function (line, lastLine) {
    if(line.indexOf('SprintsController') !== -1) {
        if(line.indexOf('SprintsController#show') > 0) {
            showCount++;
        } else if(line.indexOf('SprintsController#index') > 0) {
            indexCount++
        }
    }
});

lineReader.on('close', () => {
    console.log('SprintsController => show action ran ' + showCount + ' times');
    console.log('SprintsController => index action ran ' + indexCount + ' times');
});