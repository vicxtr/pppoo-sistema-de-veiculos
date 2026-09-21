import Veiculo from "./Veiculo.js"

class Carro extends Veiculo {

  constructor(marca, modelo, portas) {
    super(marca, modelo)

    this.portas = portas
  }

  acelerar() {
    return "O carro está acelerando com 4 rodas"
  }
}

export default Carro