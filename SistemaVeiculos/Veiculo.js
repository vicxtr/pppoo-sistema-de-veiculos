class Veiculo {
  static quantidade = 0

  constructor(marca, modelo) {
    this._marca = marca
    this._modelo = modelo

    Veiculo.quantidade++
  }

  get marca() {
    return this._marca
  }

  set marca(novaMarca) {
    this._marca = novaMarca
  }

  get modelo() {
    return this._modelo
  }

  set modelo(novoModelo) {
    this._modelo = novoModelo
  }

  acelerar() {
    return "O veículo está acelerando"
  }

  mostrarInformacoes() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`
  }
}

export default Veiculo