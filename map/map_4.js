//Obejeto utilizando Map
const pessoas = [
    {nome: 'Angela'  , Idade:20  },
    {nome: 'Leticia' , Idade:55  },
    {nome: 'wallace' , Idade:19  },
    {nome: 'Monica' ,  Idade:30  },
]

const nome = pessoas.map(function(valor){
    return valor.nome

})
console.log(nome);

///////

var idades = pessoas.map(obj => obj.Idade);
console.log(idades);