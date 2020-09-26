function tabuada() {
    let tab = document.getElementById('seltab')
    let num = document.querySelector('#txtn')
    if (num.value.length == 0) {
        window.alert('Por favor, insira algum valor.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        var i = 1
        while (i <= 10) {
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.innerHTML = `${n} x ${i} = ${n*i}` // poderia ser item.text = blabla também
            tab.appendChild(item)
            i++
        }
    }
}