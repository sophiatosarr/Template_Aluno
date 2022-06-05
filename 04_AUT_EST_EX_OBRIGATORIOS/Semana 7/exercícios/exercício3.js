function verificar(){
    var number = document.getElementById("phoneNumber").value
    var listaNumeros = number.split("");

    if (listaNumeros[0] == "(" && listaNumeros[3] == ")" && listaNumeros[9] == "-"){
        window.alert("Número inserido corretamente")
    }
    else{    
        window.alert("Por favor, insira os número no seguinte formato: (DDD)XXXX-XXXX")

    }
}