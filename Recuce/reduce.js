// reduce usado para trazer o

 var numeros = [1,2,3,4,5,6];

 // sem reduce...
var total = 0
 for (var i = 0; i < numeros.length; i++){
    total+= numeros[i];
 }

 console.log(total)

 // usando o Reduce =

 var totalReduce = numeros.reduce(function(acumulador,valor){
    acumulador = acumulador + valor ;
    console.log(acumulador,valor); // poderia ser (acumulador, array[indice]);
    return acumulador;

 },0 /*  zero é o primeiro valor acumulador ou sera o primeiro elemento do meu array*/) 
 
 console.log(totalReduce);



 const pessoas = [
    {nome: 'luiz'    , idade: 64},
    {nome: 'Meria'   , idade: 34},
    {nome: 'Alberto' , idade: 56},
    {nome: 'Joana'   , idade: 78},
    {nome: 'Lucas'   , idade: 25}
 ];

 var miasVelha = pessoas.reduce(function(acumulador,pessoa){
    if(acumulador.idade > pessoa.idade){
        return acumulador;
    }
    return pessoa;
 });

 console.log(miasVelha)


 // usando todas as funções ...

 const valores  = [5,50,80,1,2,3,5,6,11,15,22,27];

 const numero = valores.filter(function(valor){ // usando o filter
    return valor % 2 == 0;
 }).map(function(valor){ // usando o map
    return valor * 2
 }).reduce(function(acumulador,valor){  // usando o reduce
    return acumulador + valor;
 })

console.log(numero)

