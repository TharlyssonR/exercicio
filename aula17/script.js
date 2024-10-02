
let imoveisCadastrados = []
let opcao = "";

do {
    opcao = prompt(`
        \n Bem vindo ao cadastro de imovéis.
        \n Total de imóveis :${imoveisCadastrados.length}
        \nEscolha uma opção
        \n1 - Novo Imóvel :
        \n2 - Listar imóveis :
        \n3 - sair
        
        `
    )
    switch (opcao) {
        case "1":
            let imovel ={ }

            imovel.nome =prompt(`Qual o nome do proprietario`)

            imovel.quartos =Number(prompt(`Quantos quartos possui o imóvel :`))

            imovel.banheiros =Number(prompt(`Quantos banheiros posssui esse imóvel?`))

            imovel.garagem =prompt(`Possui garagem? (Sim/Não)`)

            let salvarImovel = confirm (
                `Deseja Salvar esse imóvel ? \n
               Propritario :${imovel.nome}
                Quartos:${imovel.quartos}
                Banheiros${imovel.banheiros}
                Tem garagem:${imovel.garagem}  
                `
            )

            if (salvarImovel){
                imoveisCadastrados.push(imovel)
            }

            break;
        case "2":
           if(imoveisCadastrados.length === 0){
            alert("Não existe imóveis cadastrados")
           }else{
              for(let i = 0 ; i < imoveisCadastrados.length; i++){
                alert(
                    `
                       Proprietario: ${imoveisCadastrados[i].nome} \n
                       Quartos: ${imoveisCadastrados[i].quartos} \n
                       Banheiros: ${imoveisCadastrados[i].banheiro} \n
                       Garagem: ${imoveisCadastrados[i].garagem} \
                    
                    `
                )
              }
           }
            break;
        case "3":
            alert("Programa encerrado!")
            break;
            
        default:
            alert(`Opção invalida`)
            break;
    }

} while (opcao != "3");


