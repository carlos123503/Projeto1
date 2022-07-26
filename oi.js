//var tempo = 30 ; 

//console.log("Ola mundo  "+tempo)

//i=0
//while(i<10){
//    i++
//    console.log(" O número em questão é :" + i)

//}

//

//grupo=[1250,2263,6370,932,440,215,670,885];

grupo=[300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]



function somatoriaBaixoValor(array1){
    soma = 0
    for(var i=0 ; i<array1.length ; i++ ){ 
        if(array1[i]<=1000 && array1[i]>0){
            soma = soma + array1[i]
        }
    }
    return soma
}

console.log(somatoriaBaixoValor(grupo))