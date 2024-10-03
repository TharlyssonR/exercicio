// documento object model

// conseguir tratar o documento como se fosse um objeto
// manipular melhor os elementos

// uma forma de selecionar o elemento pelo ID
// NodeList

let conteudo = document.getElementById("card")

let paragrafo = document.getElementsByTagName("p")

let selecionar = document.getElementsByClassName("cardSection")

let navegacao = document.querySelector("#menu")

let menu = document.querySelectorAll(".conteudoMenu >  a")

let cabecalho = document.getElementById("header")

let novoCard = document.querySelector(".cardSection")

console.log(conteudo)

console.log(paragrafo)

console.log(selecionar)

console.log(navegacao)

console.log(menu)


console.log(typeof conteudo)

menu.forEach((item) =>{
    console.log(item)
})



function show(){
    alert("legal, você sabe clicar")
    cabecalho.classList.add('novoCard')
}

function conteudoSection(){

   novoCard.innerHTML =
    `  
        <span>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatum quisquam,
     voluptas labore possimus autem optio consequatur animi et maiores nesciunt harum error voluptatem cumque laudantium temporibus,
     adipisci laborum alias.
  </span>
   
    `
    novoCard.classList.add('cardVermelho')

}