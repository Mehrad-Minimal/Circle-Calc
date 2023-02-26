let both;
const pi = 3.14

function calc() {
  let inputVal = document.getElementById("inp").value ;
  let area = (parseFloat(inputVal) ** 2) * pi;
  let circumference = (parseFloat(inputVal) * 2) * pi 
  
  let both = [area , circumference]
  document.getElementById("area").textContent=both[0];
  document.getElementById("circumference").textContent=both[1];
}