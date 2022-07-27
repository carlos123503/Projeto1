//Objeto Literal .
//Função em um objeto literal . 
let tenista = {
    nome: 'Roger',
    sobrenome: 'Federer',
    cumprimentar: function(){
        return 'Olá, me chamo' + this.nome;
    }
}
console.log(tenista.cumprimentar()); // olá , me chamo Roger.

// Construtores de Objetos :
function Carro(marca, modelo){  //Carro é o nome da função em Maiusculo.
    this.marca = marca;    //marca , Modelo são os parâmetros. para o objeto .
    this.modelo = modelo;  //this."" tem como finalidade definir a propriedade do objeto .
}

//Construtores de Objetos :
//Exemplos :
let meuCarro = new Carro('Ford', 'Fusion');



///Arrow Functions nos permitem escrever funções com uma sintaxe mais compacta .

/// Estrutura Básica 
(a,b) => a + b ;

let somar = (a,b) => a + b ;
let dobro = a => a**2 ;

console.log(dobro(4))

//Arrow function contem o símbolo 
// => 


let eMultiplo = (a,b) => {
    let resto = a % b;
    return a==0;
}

console.log(eMultiplo(15,4))

let saudacao = () => 'Olá Mundo !' ;

let dobroDe = numero => numero * 2 ;

let soma = (a,b) => a + b ;  

let horaAtual = () =>{
    let data= new Date();
    return data.getHours() + ':' +
    data.getMinutes();
}


/// EStrutura Básica : 
// if ternário , se escreve de forma horizontal .
// é semelhante ao if condicional,  porem os representantes condicionais( If,else)
// não são declarados . 

//condição ? primeira expressão(se verdareira) : segunda expressão(se verdadeira )
// exemplo : 
4>10?'O 4 é maior ' : 'O 10 é maior '; 

4>10?console.log('O 4 é maior ') : console.log('O 10 é maior ');


////O Switch : , propõe uma sintaxe mais legível para os casos em que queremos
// avaliar muitas possibilidades . 
//switch(expressão){
//    case valorA:
        // código para ser executado
//        break;

//    case valorB:
        // código
//        break;

//}

let idade = 5;

switch(idade){
    case 10 :
        console.log('Tem 10 anos') ;
        break;
    
    case 5 :
        console.log('Tem 5 anos');
        break;
}


//O Bloco default :
// Comando utilizado caso nenhum dos casos seja verdadeiro . 

//switch(expressão){
//    case valorA:
        // código a executar o valorA for verdadeiro
//        break;
//    default:
        // código a executar se nenhum caso for verdadeiro
//}


let fruta = 'wehyu';


switch(fruta){
    case 'maça':
        console.log('Que maçã deliciosa');
        // código a executar o valorA for verdadeiro
        break;

    case 'laranja':
        console.log('Amo Laranja!')
            // código a executar o valorA for verdadeiro
        break;

    default:
        console.log('Que fruta é essa? ');
        break ; 
        // código a executar se nenhum caso for verdadeiro
}

let dado ='True';


switch(dado){
    case 'True':
        console.log("É Verdadeiro !");
        break;
    case 'False':
        console.log("É falso !");
        break ;

}