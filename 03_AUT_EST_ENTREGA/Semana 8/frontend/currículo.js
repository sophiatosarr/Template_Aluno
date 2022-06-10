function mostraSophia(C1){

    alert(C1);



}

function Trocar(){

    var entrada1= $("#1").val();
    var entrada2= $("#2").val();
    
   
    $("#1").val(entrada2); //jQuery
    $("#2").val(entrada1)
    }

    var getDBResDiv = "#getDB";
    function TestGETDB(){
        var url = "http://127.0.0.1:3087/users";
        var resposta;
    
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url, false);
        xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    
        resposta = JSON.parse(xhttp.responseText);
        
        $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
        $(getDBResDiv).append("<br /><br />* Seleção do atributo 'title' do primeiro usuario:<br />" + resposta[0].title);
        //console.log(xhttp.responseText);
    }
    