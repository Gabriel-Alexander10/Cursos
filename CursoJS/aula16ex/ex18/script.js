let num = document.querySelector('#txtn')
let lista = document.querySelector('#flista')
let res = document.getElementById('res')
let val = []

function eh_num(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function in_lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (eh_num(num.value) && !in_lista(num.value, val)) {
        val.push(Number(num.value))
        console.log(val)
        let op = document.createElement('option')
        op.innerHTML = `O valor ${num.value} foi adicionado!`
        lista.appendChild(op)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja esta na lista!')
    }
    num.value = ''
    num.focus() // deixa o item em foco
}
function finalizar() {
    res.innerHTML = ''
    let tot = val.length
    let maior = val[0]
    let menor = val[0]
    let soma = 0
    for (let i in val){
        soma += val[i]
        if (val[i] > maior)
            maior = val[i]
        if (val[i] < menor)
            menor = val[i]
    }
    let media = soma / tot
    res.innerHTML += `<p>O total de itens adicionado foi ${tot}</p>`
    res.innerHTML += `<p>O maior valor adicionado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
    res.innerHTML += `<p>A média dos valores adicionados é ${media}</p>`
    res.innerHTML += `<p>A soma dos valores adicionados é ${soma}</p>`
}