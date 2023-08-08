// primero hacemos la funcion de agregar para que se muestre en la pantalla de la calculadora, 
// lo que seleccionamos

function agregar(valor){
    document.getElementById('pantalla').value += valor
}

// hacer la funcion para borrar cualquier cosa ingresada en la pantalla, cuando clickeamos "C"

function borrar(){
    document.getElementById('pantalla').value = ''
}

// hacer la funcion para que ejecute cualquier operacion ingresada en la pantalla

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado    
}