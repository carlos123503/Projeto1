// For in // For of :

let carro = {
    nome:'fox',
    ano:'2011'
}

for(let prop in carro){
    console.log(carro[prop])
}

let series = ["Friends", "Game of Thrones", "Breaking Bad "] ;

for (let valor of series){
    console.log(valor)
}

const dataAtual = new Date();

dataAtual.getDate();
dataAtual.getMonth();

let meuAniversario = new Date(1990,10,22);

console.log(dataAtual)

const novaData = new Date('2019-01-12') ;
console.log(novaData)