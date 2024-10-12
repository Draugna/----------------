export function celsiusToFahrenheit() {
  var x = prompt("Введите градусы по цельсию:", "0")
  let celsius = parseInt(x);
  let fahrenheit = ((celsius * 9/5) + 32); 
  console.log(fahrenheit)
  return(fahrenheit);
}
