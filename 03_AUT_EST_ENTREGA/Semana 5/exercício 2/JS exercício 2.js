function calcularnotas(){
    let notas = [200, 100, 50, 20, 10, 5, 2, 1]
    let total_cedulas = []
    let total = document.getElementById('valor').value;
    let li = document.createElement ("li");

    for(let i=0; i< notas.length; i++ ){
        let nota = notas [i]
        let nota_total = Math.floor(total / nota)
        total = total % nota

        total_cedulas.push(nota_total);
    }
    li.innerHTML = `
        ${total_cedulas[0] } 200,
        ${total_cedulas[1] } 100,
        ${total_cedulas[2] } 50,
        ${total_cedulas[3] } 20,
        ${total_cedulas[4] } 10,
        ${total_cedulas[5] }  5,
        ${total_cedulas[6] }  2,
        ${total_cedulas[7] }  1,
    `
    document.getElementById("oi").appendChild(li)
}