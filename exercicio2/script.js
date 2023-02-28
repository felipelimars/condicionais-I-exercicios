/* # Exercício 2

Escreva uma função que receba três valores. Uma idade, um booleano que responde se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >= 18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>
*/ 

const idade = Number(prompt(`Digite sua idade`))
const terminouEnsinoMedio = confirm(`Terminou o ensino médio?`)
const estaCursandoFaculdade = confirm(`Está cursando faculdade?`)

if (idade >= 18){
    console.log(`A pessoa é maior de idade`)
}else{
    console.log(`A pessoa é menor de idade`)
}

if (terminouEnsinoMedio === true){
    console.log(`Terminou o ensino medio`)
}else{
    console.log(`Nao terminou o ensino medio`)
}

if (estaCursandoFaculdade === true){
    console.log(`Esta cursando faculdade`)
}else{
    console.log(`Nao esta cursando faculdade`)
}

// Adicionei um Number(Prompt) para perguntar ao usuario suas respostas.