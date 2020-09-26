/*let num =[5,6,4,7]
num.push(1) // o mesmo que o append do python
num.sort() // organiza a lista (array) em ordem crescente
num.push(2) // adiciona o valor 2 no final da lista
console.log(num)
console.log(num[0])*/
let valores = [4,5,12,3,2,9]
for (let pos =0 ; pos < valores.length ; pos ++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('heheh')
// OUUUUU
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // poderia ser também let pos; for (pos in valores) { bla }  // declarando antes