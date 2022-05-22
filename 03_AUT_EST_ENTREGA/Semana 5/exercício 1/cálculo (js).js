function calc(){

    function calc(){
        let val1 = parseInt(document.getElementById("number1").value);
        let val2 = parseInt(document.getElementById("number2").value);
        let sinal = document.getElementById("sinal").value;
        let resultado = document.getElementById("result").value;
        if(sinal== "+") result.value = number1 + number2;
        if(sinal== "-") result.value = number1 - number2;
        if(sinal== "*") result.value = number1 * number2;
        if(sinal== "/") result.value = number1 / number2;
        if(sinal== "//") result.value = Math.floor (number1 / number2);
        if(sinal== "%") result.value = number1 % number2;

}