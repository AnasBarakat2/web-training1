

// document.getElementById('h1').innerHTML='delete msg';//to edit on any thing in html code

// document.getElementById('h1').style.color='red' // to edit on style from js

// var x =2;
// var y=4;

// document.writeln(x**y)

var element = document.getElementById('ptag')
element.innerHTML='this text after change!' 

var x = document.getElementsByClassName('htag') // to change many element have same class name
x[0].innerHTML='hello0'
x[1].innerHTML='heelo1'
document.writeln(x.length) //counter how many element have name class x