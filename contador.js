let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
}

function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;
}

function resetear() {
    cuenta = 0;
    document.getElementById("numero").innerHTML = cuenta;
}   
function negativo() {
    if  (cuenta = -1){
    document.getElementById("numero").innerHTML = cuenta;
    document.getElementById("numero").style.color = "red";
}else{
    document.getElementById("numero").style.color = "blue";
}

}