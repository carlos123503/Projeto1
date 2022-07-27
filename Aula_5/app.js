const moment = require('moment');

moment.locale('pt-br');
const horario = moment().format('LTS');
const diaSemana = moment().format('dddd');

console.log('A hora :', horario) ;
console.log('O dia da semana é: ', diaSemana);
