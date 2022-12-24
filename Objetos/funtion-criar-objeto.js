// Função para criar objeto 

    function nova_pessoa(nome,sobreNome){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = 30 ;
    }

        const aluno = new nova_pessoa('leandro','arraes');
        console.log(aluno);
        console.log(aluno.idade)

//==========================================================================

function criarPessoa(nome,sobreNome){
    return {nome,sobreNome}
}

const p2 = criarPessoa('sofia','Arraes');
console.log(p2);

//==========================================================================

let ObjPessoa ={nome: 'Jasmim',SobreNome: 'Arraes', idade: 07};

function funcao({nome,SobreNome,idade}){
    console.log(nome,SobreNome,idade);
}

funcao(ObjPessoa);

//==========================================================================


function crairFuncionario(nome,matricula){
    return{
        nome,
        matricula,
        get exibirMatricula(){
            return `${this.matricula} essa é a Matricula`
            // return matricula + "essa é a matricula";
        }
    }
}

var f1 = crairFuncionario('josé','12547');
console.log(f1);
console.log(f1.exibirMatricula)

//==========================================================================

function crairFuncionario(nome,matricula){
    return{
        nome,
        matricula,
        exibirMatricula(){
            return `${this.matricula} essa é a Matricula`
            // return matricula + "essa é a matricula";
        }
    }
};

var f1 = crairFuncionario('josé','12547');
console.log(f1);
console.log(f1.exibirMatricula())