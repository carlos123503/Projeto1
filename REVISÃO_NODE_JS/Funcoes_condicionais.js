// VARIÁVEIS : 


// var ; let ; const . 

// Declaração de uma variável : 
// var nomeSignificativo ; 
//Variável não pode começar com o nome numeros ou ç .
// Atribuição de um valor :
var meuApelido = 'Hackerman' ; 

//Declaração com let . 
let contador = 1 ; 
// Diferneça entre o var e o let é que o let so é acessível no bloco
// de código em que foi delcarada,  estes blocos são determinados por {} .

if (true) {
    var nome = "João" ; 
}

console.log(nome) ;

//if (true) {
//    let nome = "João" ; 
//}

//console.log(nome) ;
// Neste caso irá ser apontado um erro pois o let esta dentro de { } e so funciona aqui .

// Declaração com const . 
const email = "meu.email@hotmail.com"
// Variaveis const funcionam que nem variaveis let, e 
// funcionam apenas dentro de um bloco de código . 
// A diferença é que variavéis const não podem ser modificadas . 

// Como dito o let e o const são acessíveis dentro do bloco em que
// foram declaradas . Por isso podemos declaralas apenas 1 vez . 
// ex: 
// let contador= 0;
// let contador= 1;
// Erro de re-declaração da variável . 




/// TIPOS DE DADOS : 
// Numéricos 
let idade = 35 ; 
// Cadeias de caracteres(string);
let ocupacao = "Mestre da pizza vegana" ;
// Boleanos :
let luzLigada = true;
let temFeijoada = false ;

// Objeto : 

let pessoa = {
    nome: 'João' , //string
    idade: 34, // number 
    solteiro: true //Boleano
}

console.log(pessoa) ;

console.log(pessoa.nome) ;
pessoa.idade

// ARRAY  : 

let comidasFavoritas = ['Feijoada','Pizza', 'Sushi'] ; 
let numeRos=[12,45,56,324,452];

numeRos[0];
numeRos[1];


// Tipos de DADOS ESPECIAIS : 
// ( Permite o JS determinar estados especiais que os dados podem ter.)

// NaN ( not a nunber) . 
let divisaoRuim = "35"/2;

// Null( Valor Nulo )
let temperatura = null; // Não chegou um dado.

// Undefined (valor indefinido) .
// As variáveis tem um valor indefinido ate lhes atribuirmos um valor. 

let saudacao; // undefined, não tem valor. 
saudacao = "Olá!";

// Math..round() Retorna o valor arredondado para o inteiro mais proximo.
//let arredondado = Math.round(20.49) ;


/// OPERADORES  ::
// De compração Simples : 
// 10 == 155 // igualdade > false
// 10 != 15  // Desigualdade > True

// De comparação Estrita :
// 10 ==="10" // Igualdade Estrita > FAlse
// 15 !=="15" // Desigualdade Estrita >  True .


// De comparação (Continuação)

15 > 15 // maior
15 >= 15 
10 < 15 
10 <= 15

// Operadores de comparaão sempre retornam um 
// Valor Booleano , True or false. 


// Logicos :
// And 
//(10>15)&&(10!=20)  //False
//FalseandTrue     = False
//(12%4 == 0) && (12 != 24) // True

//Or
//(10>15)||(10!=20)  //true

//(12==12)||(12%5 == 0) // True


// Concatenação 

let nomeee = 'Teodoro';

let sobrenome = ' Garcia';

let nomeCompleto = nomeee +'   ' + sobrenome;

console.log(nomeCompleto)

// SE misturarmos outros tipos de dados , eles serão convertidos em string . 
let fila = 'M' ; 
let assento = 7;
let localização = fila + assento ; // 'm7' como string 


