var fs = require('fs');

function generateRandomNumbers(from, to, totalRandomNumbers) {
    for(var i=0; i < totalRandomNumbers; i++) {
        var newValue = Math.floor(Math.random() * ((to-from)+1) + from);
        newValue = newValue + ',';
        if((i+1)%100 === 0) {
            newValue = newValue + '\n';
        }
        console.log(newValue)
        fs.appendFileSync('random-numbers.txt', newValue);
    }
}

function sortNumbersByLine() {
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('random-numbers.txt')
      });
      
      lineReader.on('line', function (line) {
        console.log('Line from file:', line);
        console.log('line end . . ..');
        var obj = JSON.parse(fs.readFileSync('myjsonfile.json', 'utf8')); //now it an object
        var sortedLine = line.split(',').sort((a, b) => {
            return a-b;
        })
        console.log(sortedLine)
        for(var i=0; i< sortedLine.length; i++) {
            if(!!sortedLine[i]) {
                if(!!obj[sortedLine[i]]) {
                    obj[sortedLine[i]] = obj[sortedLine[i]] + 1;
                }
                else {
                    obj[sortedLine[i]] = 1;
                }
            }
        }
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFileSync('myjsonfile.json', json, 'utf8');
      });
}

function initialiseJsonFile() {
    var json = JSON.stringify({});
    var fs = require('fs');
    fs.writeFile('myjsonfile.json', json, 'utf8', (err, data)=> {
        console.log(err)
        console.log(data)
    });
}
// generateRandomNumbers(0,99,1000000)
function sortMillionNumbers() {
    initialiseJsonFile()
    generateRandomNumbers(0,99,10000000);
    sortNumbersByLine()
}

 
sortMillionNumbers()