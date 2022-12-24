function crairPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        altura: altura,
        peso: peso,
        imc(){
            const indice = this.peso / (this.altura**2)
        return indice.toFixed(2)// to.fixed , reduz a casa dedimal 
        }
}
}
const pessoa1 = crairPessoa("leandro","arraes",1.8,80);
console.log(pessoa1)
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.imc())