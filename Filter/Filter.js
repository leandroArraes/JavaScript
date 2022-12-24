
const numbers = [1,2,3,4];

function buscarPares(value){
    if(value % 2 == 0){
        return value;
    }
}

 var pares  = numbers.filter(buscarPares);
 console.log(pares)

const teste_1 = numbers.filter(item =>  item % 2 === 0);
console.log(teste_1);

const teste_2 = numbers.filter(item =>  item < 3);
console.log(teste_2);


// ===========================================================================

function buscarValor(value){
    if( value > 5){
        return value
    }
}

const teste_3 = numbers.filter(item => buscarValor)
console.log(teste_3)

// ===========================================================================
function busca(value){
    if( value === 5){
        return value
    }
}

const teste_4 = numbers.filter(item => busca(5))
console.log(teste_4)

// ===========================================================================

const pessoas = [
    {nome: "leandro", idade:30},
    {nome: ' AnaLuiza', idade:34},
    {nome: 'Sofia', idade:10},
    {nome: ' Jasmim', idade:00},
    {nome: 'Lua Petunia', idade:62},
    {nome: ' Clenilda', idade:50},
    {nome: ' Antonio', idade:50}  
];

const pessoaComNomeGrande = pessoas.filter(
    function(valor){
        if(valor.nome.length > 5)
        return valor;
    }
        )
console.log(pessoaComNomeGrande)

// ===========================================================================

 function buscarNome(valor){
    if (valor.nome.length > 5){
        return valor;
    }
 }
const nomeGrande = pessoas.filter(item => item.nome.length > 5);
console.log(nomeGrande)
 
// ===========================================================================

// trazer para minuscula para depois encontrar 

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(nomeTerminaComA)

// ===========================================================================

var produtos = [
    {id: 1, descricao: "Smartfone",categoria: "eletronico"},
    {id: 2, descricao: "Notebook",categoria: "eletronico"},
    {id: 3, descricao: "Geladeira",categoria: "eletrodomestico"},
    {id: 4, descricao: "liquidificador",categoria: "eletrodomestico"},
    {id: 5, descricao: "fogão",categoria: "eletrodomestico"},
]

const buscarEletronico = produtos.filter(obj => obj.categoria == "eletronico");
console.log(buscarEletronico)

function retorneEletronico(value){
    if(value.categoria == "Eletronico"){
        return value;
    }
}

var listaProdutosEletronicos = produtos.filter(retorneEletronico);
listaProdutosEletronicos.forEach(produtoElet => {
    console.log(produtoElet)
})