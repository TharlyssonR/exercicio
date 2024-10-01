// // Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
// //  O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando
// //   em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir 
// //   escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente),
// //    “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 
// //    O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.


// let fila = []
// let opcao = "";

// do {
//     let juntarCom = fila.join(" - ");
//     opcao = prompt(`
//         \n listas de pacientes: ${juntarCom}
//         \nSelecione uma opção
//         \n1 - Novo paciente
//         \n2 - Consutar paciente
//         \n3 - sair
        
//         `
//     )
//     switch (opcao) {
//         case "1":
//             let novoPaciente = prompt("Digite o nome do paciente:")
//             fila.push(novoPaciente)
//             break;
//         case "2":
//             let pacienteConsutado = fila.shift();
//             if(!pacienteConsutado){
//                 alert("Não existe paciente na fila")
//             }else{
//                 alert(`O ${pacienteConsutado} foi consultado`)
//             }
//             break;
//         case "3":
//             alert("Programa encerrado!")
//             break;
            
//         default:
//             alert("")
//             break;
//     }

// } while (opcao != "3");

