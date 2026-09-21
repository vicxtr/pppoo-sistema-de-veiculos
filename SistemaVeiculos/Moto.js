import Veiculo from "./Veiculo.js"

class Moto extends Veiculo {

  constructor(marca, modelo, cilindradas) {
    super(marca, modelo)

    this.cilindradas = cilindradas
  }

  acelerar() {
    return "A moto está acelerando rapidamente"
  }
}

export default Moto