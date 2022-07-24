// Operadores logicos.


// oerador && and

// const comida = 'pão na chapa';
// const bebida = 'cafezinho';

// if (bebida === 'cafezinho' && comida === 'pão na chapa') {
//   console.log('Muito obrigado pela refeição :)');
// } else {
//   console.log('Acho que houve um engano com meu pedido');
// }

const currentHour = 6;
let mensage = "";

if (currentHour >= 22){
    mensage = "Não deveríamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22){
    mensage = "Rango da noite, vamos jantar :D"
}
else if (currentHour >= 14 && currentHour < 18){
    mensage = "Vamos fazer um bolo pro café da tarde?"
}
else if (currentHour > 11 && currentHour < 14){
    mensage = "Hora do almoço!!!"
}
else if (currentHour > 4 && currentHour < 11){
    mensage = "Hmmm, cheiro de café recém passado"
}
console.log(mensage)