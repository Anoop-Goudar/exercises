var input=56287;
var count =0;

for(var i=1;i<=input;i++) {
 if(i.toString().indexOf('4') < 0) {
     count++
 }   
}
console.log(count)