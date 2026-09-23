const Veiculo = require("./Veiculo.js")


class Moto extends Veiculo{


    constructor(marca, modelo){

        super(marca, modelo)

        this.cilindradas = 160

    }


    acelerar(){

        return "A moto está acelerando rapidamente"

    }


}


module.exports = Moto