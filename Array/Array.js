var estoque = ["Compass", "Renegade", "Outlander", "Tracker","Duster"];

function adicionar(carro){
    estoque.push(carro);
}

function retirar(carro){
    let posicao;
    posicao = estoque.indexOf(carro);
    estoque.splice(posicao,1)
}

function consultar(carro){
    let posicao;
    posicao = estoque.indexOf(carro);
    if(posicao == -1){
        console.log("carro não foi encontrado no estoque")
    }else{
        console.log("O carro Está no estoque ")
    }
}

function trocar(entra,sai){
    let posicao;
    posicao= estoque.indexOf(sai);
    estoque.splice(posicao,1,entra);
}

//Retirar o tracker 
retirar("Tracker");
adicionar("onix");
retirar("Compass");
trocar(" Pajero TR4","Outlander");
adicionar("Tiggo 7");
retirar("Duster");
consultar("Duster");
console.log(estoque);
