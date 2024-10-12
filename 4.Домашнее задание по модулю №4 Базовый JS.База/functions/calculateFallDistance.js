export function calculateFallDistance(){
  const g = 9.8;
  var sec = prompt("Время падения в секундах:", "0")
  var fallDistance = (1/2) * g * sec^2
  console.log(fallDistance)
  return fallDistance;
}