
var string = 'grumpy wizard make toxic brew for the evil queen and jack'
myArray = string.split('')
var myChars = {}
for (var i = 0; i < myArray.length; i++) {
  myChars[i] = myArray[i]
}
console.log(myChars)

function eachChar (i) {
  var char = document.createElement('p')
  char.textContent = myChar[i]
  return char
}
