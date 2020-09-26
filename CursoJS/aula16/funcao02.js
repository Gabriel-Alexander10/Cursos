function soma(n1 = 0, n2 = 0) {
    console.log(n1,n2) // vírgula é equivalente a um espaço
    return n1 + n2
}
let s = soma(8,3)
let p = soma(5)
let k = soma(n2=2, n1= 0) // não funciona
console.log(`${s} ${p} ${k}`)