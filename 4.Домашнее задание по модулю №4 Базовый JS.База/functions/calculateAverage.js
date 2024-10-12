export function calculateAverage(){
  var x = prompt("Число 1:", "0")
  let num1 = parseInt(x);
  console.log(num1);
  var y = prompt("Число 2:", "0")
  let num2 = parseInt(y);
  console.log(num2);
  var z = prompt("Число 3:", "0")
  let num3 = parseInt(z);
  console.log(num3);
  let average = ( num1 + num2 + num3 ) / 3;
  console.log(average)
  return average;
}