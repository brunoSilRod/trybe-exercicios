// function verificaPalindrome (word){
//     if (word.reverse() == word){
//         return true
//     }else{
//         return false
//     };
// };

// let palavra = "SATOR AREPO TENET OPERA ROTAS"

// let resultado = verificaPalindrome(palavra.split(''))
// console.log(resultado)

let numeros = [2, 3, 6, 7, 10, 1]

function encontraMaior (numeros){
    let maiorNumero = "";
    for (let i in numeros){
        if (numeros[i] > maiorNumero || i == 0){
            maiorNumero = numeros[i]
        }
    }
    return numeros.indexOf(maiorNumero)
}
console.log(encontraMaior(numeros))