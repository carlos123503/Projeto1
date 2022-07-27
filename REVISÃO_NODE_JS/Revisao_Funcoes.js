function somar (a,b){
    return a + b;

}

console.log(somar(2,3))


//

function fazerSorvete(quantidade){
    return 'sovete'.repeat(quantidade);
}

console.log(fazerSorvete(5))

// Definindo funções : 
// Estas são funções anônimas.

let fazerSushi = function(quantidade){
    return 'sushi'.repeat(quantidade);    
}
console.log(fazerSushi(13))

//
function saudacao(nome,sobrenome){
    return 'Olá' + nome + ' ' + sobrenome;
}

console.log(saudacao('Roberto','Rodríguez'));


// function saudacao (nome='visitante',sobrenome = 'anônimo') { 
    //return 'Olá' + nome + ' ' + sobrenome;
// }

// saudacao(); // Retornará ' Olá visitante Anônimo ' 



/// 3 ESCOPO : ( Escopo se refere ao alcance de uma variável, ou seja , de onde podms acessá-la)

// Local :
//uma variável dentro de uma função é uma variável local. 
// Para que esta seja global deve ser declarada fora do laço .

// Exemplo onde saudacao é um escopo local. 
// function ola(){
    //let saudacao = 'Olá, tudo bem ?';
    // return saudacao ;
//}
// console.log(saudacao);


/// Caso em que temos saudacao como uma variavle global .
// let saudacao = 'Olá, tudo bem ? ' ;
// function ola(){
    //return saudacao;
//}

// console.log(saudacao);



/// Condicionais :

//if(condiçao){
    // codigo a ser executado
//}else if(outra condição){
    // código a se executar se a outra condicao for verdadeira

//}else{
    // código a se executar

//}

let linguagem = "javascript";

if(linguagem == "javascriptl"){
    console.log("Estou aprendendo");
}else{
    console.log("Vou aprender mais para frente");
}
