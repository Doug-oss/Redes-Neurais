import { Matrix } from "./Matrizes.mjs";

//sigmoid
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
//derivative de sigmoid
function dsigmoid(y) {
    return y * (1 - y);
}
class NeuralNetwork {
    constructor(i_nodes, h_nodes, o_nodes) {
        //criação das camadas
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        //ligação das camadas
        this.w_ih = new Matrix(h_nodes, i_nodes);
        this.w_ho = new Matrix(o_nodes, h_nodes);

        //inicialização dos pesos
        this.w_ih = Matrix.random(this.w_ih);
        this.w_ho = Matrix.random(this.w_ho);

        //inicialização dos bias
        this.b_h = new Matrix(h_nodes, 1);
        this.b_o = new Matrix(o_nodes, 1);

        //Valores de bias igual a 1
        this.b_h = Matrix.map(this.b_h, (x) => {
            return 1;
        });
        this.b_o = Matrix.map(this.b_o, (x) => {
            return 1;
        });
        

    }
    train(input_array, target_array) {
        let learning_rate = 0.1;
        let epochs = 10000;
        let interations = 0;

        let output_errors;
        //while
        while (interations <= epochs){
            //input -> hidden
            let inputs = Matrix.arrayToMatrix(input_array);
            let hidden = Matrix.multiply(this.w_ih, inputs);
            hidden = Matrix.add(hidden, this.b_h);
            hidden = Matrix.map(hidden, sigmoid);
            
            //output -> hidden
            let outputs = Matrix.multiply(this.w_ho, hidden);
            outputs = Matrix.add(outputs, this.b_o);
            outputs = Matrix.map(outputs, sigmoid);
            
            //Backpropagation
            //calculo do erro
            let targets = Matrix.arrayToMatrix(target_array);
            output_errors = Matrix.subtract(targets, outputs);

            //quebra o loop
            if(output_errors.data < 0.1 && output_errors.data > -0.1){
                console.log("Treinamento Acabou.");
                break;
            }

            let d_outputs = Matrix.map(outputs, dsigmoid);
            let hidden_T = Matrix.transpose(hidden);
            
            //calculo do gradiente
            let gradiente_o = Matrix.hadamard(output_errors, d_outputs);
            gradiente_o = Matrix.scalarMultiply(gradiente_o, learning_rate);
            
            //atualização dos pesos output --> hidden
            let ho_deltas = Matrix.multiply(gradiente_o, hidden_T);
            this.w_ho = Matrix.add(this.w_ho, ho_deltas);

            //atualização dos bias output --> hidden
            this.b_o = Matrix.add(this.b_o, gradiente_o);
            
            //calculo do erro
            let w_ho_T = Matrix.transpose(this.w_ho);
            let ih_errors = Matrix.multiply(w_ho_T, output_errors);
            let d_hidden = Matrix.map(hidden, dsigmoid);
            let inputs_T = Matrix.transpose(inputs);

            //calculo do gradiente
            let gradiente_h = Matrix.hadamard(ih_errors, d_hidden);
            gradiente_h = Matrix.scalarMultiply(gradiente_h, learning_rate);

            //atualização dos pesos hidden --> input
            let ih_deltas = Matrix.multiply(gradiente_h, inputs_T);
            this.w_ih = Matrix.add(this.w_ih, ih_deltas);

            //atualização dos bias hidden --> input
            this.b_h = Matrix.add(this.b_h, gradiente_h);
            
            console.log("Tax Error: " + output_errors.data);
            console.log("Epochs: " + interations);
            
            interations++;

        }
    }
    predict(input_array) {
        let inputs = Matrix.arrayToMatrix(input_array);
        let hidden = Matrix.multiply(this.w_ih, inputs);
        hidden = Matrix.add(hidden, this.b_h);
        hidden = Matrix.map(hidden, sigmoid);

        let outputs = Matrix.multiply(this.w_ho, hidden);
        outputs = Matrix.add(outputs, this.b_o);
        outputs = Matrix.map(outputs, sigmoid);
        console.table(outputs.data);

        return outputs.data;
    }
    
    

}


let nn = new NeuralNetwork(2, 2, 1);


//Teste XOR
let data_train = [
    {
        input: [0, 0],
        target: [0]
    },
    {
        input: [0, 1],
        target: [1]
    },
    {
        input: [1, 0],
        target: [1]
    },
    {
        input: [1, 1],
        target: [0]
    }
];

for (let i = 0; i < data_train.length; i++) {
    nn.train(data_train[i].input, data_train[i].target);
}

nn.predict([1, 0]);
