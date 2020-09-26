function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n* fatorial(n-1)
    }
}
let p = fatorial(6)
console.log(p)