let input = document.getElementById("lista_bagunçada")
let result = document.getElementById("vem")

function arruma() {
    let list = input.value.split(",")
    list = list.map(item => parseInt(item))
    let sortedList= sort(list)
    let li = document.createElement("li")

    li.innerHTML = `${
        sortedList
        
    }`
    result.appendChild(li)
}

function sort(list) {
    let temp
    for (
        let i = 0;
        i < list.length;
        i++

    ) {
        for (
            let j = 0;
            j < list.length - i - 1;
            j++
        ) {
            if (
                list[j] > list[j + 1]

            ) {
                temp = list[j] 
                list[j] = list[j+1]
                list[j+1]= temp

            }
        }
    }
    return list
}