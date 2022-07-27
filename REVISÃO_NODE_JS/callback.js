// É uma função que s epassa como paâmetro para outa função.
// a função que recebe é que se encarrega de executá-lo quando for necessário . 

// Anônima : 
// A função que passamos não tem nome,  anônima.  
// Como as funções anônimas não podem ser chamadas por seu nome, 
// precisamos escrevê-la dentro da chamada função callback . 


setTimeout(function(){
    console.log('Ola, Mundo !') ;
}, 1000)


// Função Definida : 

let meuCallback = () => console.log('Olá, mundo !');
setTimeout (meuCallback, 1000 ) ;

// exemplo
const somar = (numeroA, numeroB) =>numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB) ;

console.log(calculadora(10,20,somar)) ; 


// É Possível criar uma função dentro da função .
console.log(calculadora(10,20,(numeroA,numeroB)=>numeroA-numeroB)) ; 


// Prática :
const dobro  = (numeA) => numeA*2;

const triplo = (numeA) => numeA*3; 

const aplicar = (numeA,operacao) => operacao(numeA) ;

console.log('O Dobro é : ' ,aplicar(5,dobro))  ;

console.log('O triplo é : ' ,aplicar(5,triplo))  ; 



// Métodos de Arrays :
// Método Map : 

let numeros = [2,4,6,8] ;

let dobroNumeros = numeros.map(function(umNumero){
    return umNumero*2;
});

console.log(dobroNumeros);


let maiores = numeros.filter(function(x){
    return x >6;
});

console.log(maiores); 


// 
let numeros3 =[5,7,16] ;

let resultado = numeros3
.reduce(function(acumulador,umNumero){
    return acumulador + umNumero;
})

console.log(resultado) ;


///  forEach : 

numeros3.forEach(function(valor,index){
    console.log("O valor é :"+ valor +"e a sua posição é :" + index) ;
});
