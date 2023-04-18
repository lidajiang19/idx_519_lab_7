function init(){
//add your javascrip between these two lines of code
var button = document.getElementById('elementid')

function showText(){
  var textbox = document.getElementById('enterinput')
  document.getElementById(elementid).innerHTML=textbox.value
  alert('Lida Jiang:' + textbox.value)
}

button.addEventListener('click', showText)




}
window.addEventListener('load', init);
