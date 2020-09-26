let amigo = {
    nome: 'José',
    idade: 18,
    sexo: 'M',
    engordar(p){
        this.peso += p
    },
    peso: 72.5
}
amigo.engordar(3)
console.log(`Meu amigo ${amigo.nome} tem ${amigo.idade} anos de idade e ${amigo.peso}Kg`)