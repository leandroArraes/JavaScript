// 1° Forma de Criar um Objeto 

const pessoa ={
    nome: "Leandro",
    sobrenome: "Arraes"
};

console.log(pessoa['nome']);
console.log(pessoa['sobrenome']);

const chave = 'sobrenome';
console.log(pessoa[chave]);

// 2° Forma de Criar um Objeto 

const pessoa1 = new Object();
pessoa1.nome = "Leandro"
pessoa1.sobreNome = "Arraes"
pessoa1.idade = 32

pessoa1.falarNome = function(){
    //console.log(`${this.nome} está falando seu nome`)
    console.log(this.nome + " está falando seu nome!");
}

pessoa1.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome("Leandro Arraes");

console.log(pessoa1.getDataNascimento());


