function init(){
//add your javascrip between these two lines of code
var button = document.getElementById('elementid')

function ShowText(){
  var textbox = document.getElementById('enterinput')
  document.getElementById(elementid).innerHTML=textbox.value
  alert('Lida Jiang:' + textbox.value)
}

button.addEventListener(click, ShowText)




}
window.addEventListener('load', init);
