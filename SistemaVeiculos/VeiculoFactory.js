const Carro = require("./Carro.js")
const Moto = require("./Moto.js")


class VeiculoFactory{


    static criarVeiculo(tipo, marca, modelo){


        if(tipo === "carro"){

            return new Carro(marca, modelo)

        }


        else if(tipo === "moto"){

            return new Moto(marca, modelo)

        }


    }


}


module.exports = VeiculoFactory