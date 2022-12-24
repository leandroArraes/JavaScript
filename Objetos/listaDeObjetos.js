function criarPessoa(nome,sobrenome,altura,){
    return{
        nome,
        sobrenome,
        altura: altura,       
}
}

const pessoa = criarPessoa("Leandro","arraes",1.70);
const pessoa2 = criarPessoa("ana","luiza",1.70);

var listaDePessoas =[];

listaDePessoas.push(pessoa);
listaDePessoas.push(pessoa2);

console.log(listaDePessoas);