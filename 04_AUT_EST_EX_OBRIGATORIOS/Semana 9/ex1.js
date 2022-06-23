function calcular(){
    var numero = Number(document.getElementById("numero").value)
    console.log(numero)
    
        if ( numero % 2 == 0){
            document.getElementById("textoresultado").textContent = "É PAR"
        }else{
            document.getElementById("textoresultado").textContent = "É IMPAR"
        }
}