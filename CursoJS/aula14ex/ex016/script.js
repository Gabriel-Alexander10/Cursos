var input_inicio, input_fim, input_passo;
var inicio, fim, passo;
var res = document.querySelector('#res')
input_inicio = document.querySelector('#inicio')
input_fim = document.querySelector('#fim')
input_passo = document.querySelector('#passo')
function calcular() {
    inicio = Number(input_inicio.value)
    console.log(input_inicio.value.length)
    fim = Number(input_fim.value)
    passo = Number(input_passo.value)
    if (input_inicio.value == '' || input_fim.value == '') {
        alert('Não é possivel contar! Verifique os campos')
    } else {
        res.innerHTML = ''
        if (passo == 0) {
            window.alert('Não é possível contar com passo 0! Considerando passo como 1')
            passo = 1
        }
        if (inicio > fim) {
            for (inicio; fim <= inicio; passo) {
                res.innerHTML = res.innerHTML + `${inicio} -> `
                inicio -= passo
            }
        } else {
            for (inicio; inicio <= fim; passo) {
                res.innerHTML = res.innerHTML + `${inicio} -> `
                inicio += passo
            }
        }
        res.innerHTML = res.innerHTML + 'Fim'
    }
}