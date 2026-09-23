const Veiculo = require("./Veiculo.js")


class Carro extends Veiculo{


    constructor(marca, modelo){

        super(marca, modelo)

        this.portas = 4

    }


    acelerar(){

        return "O carro está acelerando com 4 rodas"

    }


}


module.exports = Carro