
const boton=document.querySelector("button");
/*boton.addEventListener("mouseover",function(){
    boton.style.backgroundColor="red";
});
boton.addEventListener("mouseout",function(){
    boton.style.backgroundColor="blue";
});*/
boton.addEventListener("dblclick", saludar);

function saludar(event){
    console.log(event.target);
}
/*document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento ha sido cargado");
});*/
