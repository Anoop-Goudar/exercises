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