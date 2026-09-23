const prompt = require('prompt-sync')()

const VeiculoFactory = require("./VeiculoFactory.js")
const Veiculo = require("./Veiculo.js")


function separador(){
    console.log("\n===============================\n")
}


console.log("SISTEMA DE VEÍCULOS\n")


function criarVeiculo(){

    separador()

    let tipo = prompt("Digite o tipo do veículo (carro/moto): ")

    let marca = prompt("Digite a marca: ")

    let modelo = prompt("Digite o modelo: ")


    let veiculo = VeiculoFactory.criarVeiculo(
        tipo,
        marca,
        modelo
    )


    if(veiculo){

        console.log("\nVeículo criado com sucesso!")

        separador()

        console.log(veiculo.mostrarInformacoes())

        console.log(veiculo.acelerar())

        separador()

    }else{

        console.log("Tipo de veículo inválido")

    }

}


function menu(){

    let opcao


    do{

        console.log("===== SISTEMA DE VEÍCULOS =====\n")

        console.log("1 - Criar veículo")
        console.log("2 - Ver quantidade de veículos")
        console.log("3 - Sair")


        separador()


        opcao = prompt("Escolha uma opção: ")


        if(opcao === "1"){

            criarVeiculo()

        }

        else if(opcao === "2"){

            console.log(
                `Quantidade de veículos criados: ${Veiculo.quantidade}`
            )

        }

        else if(opcao === "3"){

            console.log("Encerrando sistema...")

        }

        else{

            console.log("Opção inválida")

        }


    }while(opcao !== "3")


}


menu()