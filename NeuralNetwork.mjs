import {Matrix} from "./Matrizes.mjs";

class NeuralNetwork{
    constructor(i_nodes,h_nodes,o_nodes){
        //criação das camadas
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        //ligação das camadas
        this.w_ih = new Matrix(h_nodes,i_nodes);
        this.w_ho = new Matrix(o_nodes,h_nodes);

        //inicialização dos pesos
        Matrix.matrixRandom(this.w_ih);
        Matrix.matrixRandom(this.w_ho);

        //inicialização dos bias
        this.b_h = new Matrix(h_nodes,1);
        this.b_o = new Matrix(o_nodes,1);

        //Valores de bias igual a 1
        Matrix.matrixMap(this.b_h,(x)=>{
            return 1;
        });
        Matrix.matrixMap(this.b_o,(x)=>{
            return 1;
        });

    }

}


new NeuralNetwork(2,2,1);
