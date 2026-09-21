import Carro from "./Carro.js"
import Moto from "./Moto.js"

class VeiculoFactory {

  static criarVeiculo(tipo, marca, modelo) {

    if(tipo === "carro") {
      return new Carro(marca, modelo, 4)
    }

    if(tipo === "moto") {
      return new Moto(marca, modelo, 160)
    }

  }

}

export default VeiculoFactory