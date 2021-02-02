var para11=[];
var para22=[];
function Get1(){
  para11.push(document.getElementById("p1_1").value);
  para11.push(document.getElementById("p1_2").value);
  para11.push(document.getElementById("p1_3").value);
  para11.push(document.getElementById("p1_4").value);
  para11.push(document.getElementById("p1_5").value);
  var remove1= para11.join(". ")
  document.getElementById("p1").innerHTML=remove1;
}
function Get2(){
  para22.push(document.getElementById("p2_1").value);
  para22.push(document.getElementById("p2_2").value);
  para22.push(document.getElementById("p2_3").value);
  para22.push(document.getElementById("p2_4").value);
  para22.push(document.getElementById("p2_5").value);
  var remove2= para22.join(". ")
  document.getElementById("p2").innerHTML=remove2;
}