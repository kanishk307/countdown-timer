

var y,m,d,h,min,s,ms;



   document.getElementById('submit').onclick = function(){
    y = document.getElementById('year-textbox').value;
    console.log(y);
    m = document.getElementById('month-textbox').value;
    console.log(m);
    d = document.getElementById('day-textbox').value;
    console.log(d);
    h = document.getElementById('hour-textbox').value;
    console.log(h);
    min = document.getElementById('minute-textbox').value;
    console.log(min);
    s = document.getElementById('second-textbox').value;
    console.log(s);
    ms = document.getElementById('millisecond-textbox').value;
    console.log(ms);      
       
    var deadline = new Date(y,m,d,h,min,s,ms).getTime();
console.log(deadline);  
    
       
    var x = setInterval(function() {
        var now = new Date().getTime();
    console.log(now); 
        
    var t = deadline - now;
    console.log(t);   
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
var milliseconds = Math.floor((t % (1000 * 60)) / (1000*60));
document.getElementById("day").innerHTML =days-31;
document.getElementById("hour").innerHTML =hours;
document.getElementById("minute").innerHTML = minutes; 
document.getElementById("second").innerHTML =seconds;
//document.getElementById("millisecond").innerHTML =milliseconds;     

     
if (seconds === 0) {
//        break;
        clearInterval(x);
//        days=0;
//        hours=0;
//        minutes=0;
//        seconds=0;
//        milliseconds=0;
//        document.getElementById("demo").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0';
        document.getElementById("millisecond").innerHTML ='0';
        alert("TIME UP");
        
}
}, 1);   
   }
    
   


