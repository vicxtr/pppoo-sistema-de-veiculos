import VeiculoFactory from "./VeiculoFactory.js"
import Veiculo from "./Veiculo.js"


const carro = VeiculoFactory.criarVeiculo(
  "carro",
  "Toyota",
  "Corolla"
)

const moto = VeiculoFactory.criarVeiculo(
  "moto",
  "Honda",
  "CG 160"
)


console.log(carro.mostrarInformacoes())
console.log(carro.acelerar())


console.log(moto.mostrarInformacoes())
console.log(moto.acelerar())


console.log(`Quantidade de veículos: ${Veiculo.quantidade}`)