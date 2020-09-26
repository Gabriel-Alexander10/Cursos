function contar() {
    let ini = document.getElementById('txti')
    let fim = document.querySelector('#txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam dados!")
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (var c = i; c <= f; p) {
                res.innerHTML += `${c} \u{1F449} ` // U+1F449 código do emoji, para usar -> \u{1F449}
                c += p
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; p) {
                res.innerHTML += `${c} \u{1F449} ` // U+1F449 código do emoji, para usar -> \u{1F449}
                c -= p
            }
        }
        res.innerHTML += `\u{1F3C1}` // emojis :)
    }
}