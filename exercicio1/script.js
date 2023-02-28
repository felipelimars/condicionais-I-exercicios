/* Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o
número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par".
Depois disso, imprima o retorno no console. */

const numeroQualquer = Number(prompt(`Digite um número:`))
if (numeroQualquer % 2 === 0){
    console.log(`É par`) 
}else{
    console.log(`É impar`)
}

//criei um 'é impar' para verificar números impares, e um 'Number(prompt)'para perguntar ao usuário.