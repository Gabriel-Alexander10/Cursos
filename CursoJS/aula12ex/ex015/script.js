function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nas = window.document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (ano_nas.value.length == 0 || Number(ano_nas.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(ano_nas.value)
        var genero = 'Homem'
        var div1 = document.createElement('div')
        div1.setAttribute('id', 'div_res')
        div1.style.backgroundColor = 'blue'
        if (idade>=0 && idade < 10){
            //criança
        } else if (idade < 21) {
            // Jovem
        } else if (idade < 50) {
            // Adulto
        } else {
            // Idoso
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            div1.style.backgroundColor = 'pink'
            if (idade>=0 && idade < 10){
                //criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${genero} com ${idade} anos de idade`
        res.appendChild(div1) // adiciona um elemento em algo
    }
}