let frutass = ["maça","banana","uva"] ;

let frutasDois = ["laranja", "abacate", "goiaba"] ;

let listaCompleta = [frutass , frutasDois] ; 

console.log(listaCompleta) ;

let listaCompletaa = [...frutass , ...frutasDois] ; 

console.log(listaCompletaa) ;

let pessoa ={
    nome : "vinicius",
    idade: 22
}

let infoPessoal = {
    tel:"123456789",
    rg:11212121,
    ...pessoa
}



let pessoaCompleta = {
    endereco: " Ruas dos bobos",
    ...infoPessoal

}

console.log(pessoaCompleta) ;




function letras(...paramns){
    console.log(paramns)
}

letras("a","b") ;

