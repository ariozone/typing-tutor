var currentCharacter = {
  index: 0,
  failures: 0
}

var $h1 = document.createElement('h1')
$h1.textContent = 'Typing Tutor'
document.body.appendChild($h1)

var string = 'grumpy wizard make toxic brew for the evil queen and jack'
var charsArray = string.split('')
var objArray = []
for (var i = 0; i < charsArray.length; i++) {
 var obj = {}
 obj.letter = charsArray[i]
 objArray.push(obj)
}

function eachChar (char, i) {
 var $span = document.createElement('span')
 $span.textContent = char
 if (i === currentCharacter.index) {
   $span.setAttribute('class', 'current-character')
 }
 return $span
}

function renderString (allChars) {
 var $p = document.createElement('p')
 for (var i = 0; i < allChars.length; i++) {
   $p.appendChild(eachChar(charsArray[i], i))
 }
 return $p
}
var myStr = renderString(objArray)
document.body.appendChild(myStr)
