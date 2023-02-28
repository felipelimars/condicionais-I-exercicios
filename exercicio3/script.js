/* # Exercício 3

Crie uma função que recebe do usuário sua nacionalidade, utilizando um **prompt** com a seguinte mensagem:
 "Escreva aqui sua nacionalidade." e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que 
verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, 
e caso seja, imprima a nacionalidade no console. 
O último `else` deve imprimir "nacionalidade não encontrada" 
caso o valor de `nacionalidade` não corresponda a nenhuma das possibilidades acima.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas.*/

const nacionalidadeBrasileira = (`brasileira`)
const nacionalidadeArgentina = (`argentina`)
const nacionalidadeUruguaia = (`uruguaia`)
const nacionalidadeChilena = (`chilena`)
const nacionalidadeColombiana = (`colombiana`)

const nacionalidade = prompt(`Qual sua nacionalidade?`).toLowerCase()
if (nacionalidade === nacionalidadeBrasileira){
   console.log (`A sua nacionalidade é brasileira`)
}else if (nacionalidade === nacionalidadeArgentina){
   console.log (`A sua nacionalidade é argentina`)
}else if (nacionalidade === nacionalidadeUruguaia){
    console.log (`A sua nacionalidade é uruguaia`)
}else if (nacionalidade === nacionalidadeChilena){
    console.log(`A sua nacionalidade é chilena`)
}else if (nacionalidade === nacionalidadeColombiana){
    console.log(`A sua nacionalidade é colombiana`)
} else {
    console.log(`Nacionalidade não encontrada`)
}