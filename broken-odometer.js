// Exercise 1

// There is an odometer in a bike and it is broken in a way whenever they're supposed to be value 4 in one of the 5 digits in odometer it skips that and shows 5. It is not able to display the digit 4. For example, if the odometer is at reading 32363 KM then next reading it will show is 32365 and not 32364 or if the odometer shows 3999 then next reading it will show is 5000 instead 4000. 

// So if odometer shows the current reading 56287 then what is its actual reading?

var input=56287;
var count =0;

for(var i=1;i<=input;i++) {
 if(i.toString().indexOf('4') < 0) {
     count++
 }   
}
console.log(count)




