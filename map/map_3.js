var alunos = [
    {nome: 'Angela '  , nota:9 },
    {nome: 'Leticia' , nota:8 },
    {nome: 'wallace' , nota:10 },
    {nome: 'Monica ' ,  nota:7 },
]

var classificacaoAlunos = alunos.map((elemento,indice) => {
    let item = {}; // criando um obejato novo
    item.nome = elemento.nome;
    item.classificacao = indice;
    item.nota = elemento.nota *2;
    return item;
})

console.log(classificacaoAlunos);