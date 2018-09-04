
var string = 'grumpy wizard make toxic brew for the evil queen and jack'
myArray = string.split('')
var char = {}
for (var i = 0; i < myArray.length; i++) {
  char[i] = myArray[i]
}
console.log(char)

function eachChar () {
  var char = document.createElement('p')
  char.textContent = myArray[i]
  return char
}
