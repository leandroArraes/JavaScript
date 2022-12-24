// Iteração map
// O map usa como um for ... par percoorer arrays

let arr = [2,3,4,5,6]

 //for rapido estágiario
 for( i = 0 ; i > arr.length;i++){
     console.log(arr[i]);
 }

 //atalho para comentario ctrl + :
// outra forma de fazer o for, Pleno usando Map
//elemento,indicie,array pode ser o que eu quiser buscar


arr.map(function(elemento,indicie,array){
    console.log(elemento);

})

arr.map(function(elemento,indicie,array){
    console.log(array[indicie]);
})

let novo = arr.map(function(elemento,indicie,array){
    return elemento*3;
})

console.log(novo);