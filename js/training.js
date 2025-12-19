

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
// document.writeln(x.length) //counter how many element have name class x

function checkis4(){
    var num=document.getElementById('check').value //.value : to return value
    if(parseInt(num)===4){
        document.writeln("correct number")
        //parseInt : to conver num from string to int
        //compiler read num as string , we need to convert it .
    }
    else{
        alert('Rong number') //anouther way to show data
    }
}


function count(){
    var num1=document.getElementById('Fnum').value
    var num2=document.getElementById('Snum').value
    var op =document.getElementById('op').value
    var y ;
   switch (op){

    case '+':

    y=parseInt(num1)+parseInt(num2) ;
        document.writeln(parseInt(y))
        break;
    case '-':
        y=num1-num2;
        document.writeln(y) 
        break;
     default :
     document.writeln('undefined operation')      
   } 

}


var themeToggle = document.getElementById('theme');
 var body =document.body;

themeToggle.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
 })
