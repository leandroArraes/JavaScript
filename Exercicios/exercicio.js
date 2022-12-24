var pessoas = [
    {nome: 'Angela '  , idade:20 },
    {nome: 'Leticia' , idade:55 },
    {nome: 'wallace' , idade:19 },
    {nome: 'Monica ' ,  idade:30 },
]

// adicionando id no objeto mas criando um novo arrey
const nome = pessoas.map(function(objeto,indicie){
    objeto.id = indicie;
    return objeto;

})
console.log(nome);
// agora retornando um id mantendo o nome da variavel 
const comIds = pessoas.map(function(obj,indicie){
    const novoObjeto = {...obj};
    novoObjeto.id= indicie;
    return novoObjeto;
})

console.log(pessoas);

const novos = pessoas.map(funcaoNova);

function funcaoNova(elemento){
    let texo = "Nome: " + elemento.nome + "   idade: " + elemento.idade;
    return texo;  
}

console.log(novos)