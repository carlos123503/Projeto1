console.log('Olá Mundo!');

let a = 10;
let b = 15;

let total = a + b ;


console.log('A total é ',total); 


var pessoa = {nome:'Ana Maria', idade: 25 , cpf:189000000} ; 

function acelerarCarro(velocidade){
    console.log('Estou acelerando para ', velocidade);
}

var carro = {
    ano: 2021,
    modelo: 'sedan',
    marca : 'Fiat',
    acelerar: acelerarCarro
};

carro.acelerar(150);
