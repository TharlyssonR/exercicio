// let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'legolas'];

// // push : adciona os dados no final do array

// personagens.push('Boromir')

// console.log(personagens)

// // unshift:adciona os dados no iinicio do array

// personagens.unshift('Sauron');

// console.log(personagens)

// // pop: retira o último elemento do array

// personagens.pop('Boromir');

// console.log(personagens)

// // shift: retira o primeiro dado do array

// personagens.shift('Sauron');

// console.log(personagens)

// let procura = personagens.includes('Gendalf');
// console.log(procura)

// let procuraIndice = personagens.
// indexOf('Frodo');

// console.log(procuraIndice)

// personagens[1] = 'Gandolf o cinzento'

// console.log(procuraIndice)

// console.log(personagens)

// let selecaoPersonagens = personagens.
// slice(0,4);

// console.log(selecaoPersonagens)

// let outrasSelecao = personagens.slice(-4)

// console.log(personagens)
// console.log(outrasSelecao)

// let personagens2 = ["Fheanor",
//     "Fingolfin" ];
// let arrayConcat = personagens.concat(personagens2)
// console.log (arrayConcat)

// let juntarCom = personagens.join(" - ");

// console.log(juntarCom)

let personagens = ['Frodo', 'Gendalf', 'Pippin', 'Aragorn', 'legolas'];

for(let indice = 0 ; indice < personagens.length; indice++){
    let elemento = personagens[indice];
    console.log(`O personagem ${elemento} está no indice ${indice}`)
}