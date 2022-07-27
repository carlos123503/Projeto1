let minhaArray = ['Star Wars', true, 23];

console.log(minhaArray)


///  Métodos de Arrays 1 
// ADicona elementos nas ultimas posições no final .
var cores = ['Roxo','Laranja','Azul'];

cores.push('Violeta') ;
console.log(cores); 

cores.push('Cinza','Ouro');

console.log(cores) ;

// .pop() Elimina o último elemento do array . 
var series = ['Sobrenatural','Breaking Bad','The Soprano'];

var ultimaSerie = series.pop();

console.log(series);
console.log(ultimaSerie);


/// .shift() , Elimina o primeiro elemento de um array . 


/// .unshift(), Adiciona um ou mais elementos ao início de um array.  

/// .join() , Junta os elementos de uma array usando o separador 
/// que especificamos . Se não o especificar . 
var diasDaSemana = ['Segunda','Terça','Quarta','Quinta'];
var separadosPorVirgula = diasDaSemana.join();

console.log(separadosPorVirgula);


/// .indexOf()
// Procura o elemento sitado e retorna a sua posição no array . 
// Se o elemento não for encontrado ele retorna o -1 . 

var frutas = ['Maça','Pera','Morango'];
frutas.indexOf('Morango') ; 
console.log(frutas.indexOf('Morango')) ;


// .lastIndexOf() 
//Ele começa procurando pelo elemento
// no final do array para o início . 
// Se houver elementos repitidos ele retorna
// a posição do primeiro que ele encontrar .

// .includes()
// Recebe um item para pesquisar no array e retorna um boleano . 


