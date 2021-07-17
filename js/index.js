//Declaramos las variables a utilizar

var add = document.getElementById("ButtonAdd");
var mark = document.getElementById("ButtonMark");
var delete = document.getElementById("ButtonDelete");

//Siguiente paso es agregar la lógica

add.addEventListener("click",TodoAdd);
mark.addEventListener("click",TodoMark);
delete.addEventListener("click",TodoDelete);

//funciones

function TodoAdd(stuff){
    stuff.preventDefault();
    
    var list = document.getElementById("TodoList");

}