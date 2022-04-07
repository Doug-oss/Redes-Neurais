class Matrix{
    //Define numero de linhas e colunas
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        //Preenche a matriz rXc com 0
        this.data = Array(rows).fill().map(() => Array(cols).fill(0));
    }
    //Randomiza os numeros
    static matrixRandom(m){
        for(let i = 0; i < m.rows; i++){
            for(let j = 0; j < m.cols; j++){
                //numeros entre -10 e 10
                m.data[i][j] =Math.floor(Math.random() * 20 - 10);
            }
        }
    }
    //Matriz Identidade
    static matrixIdent(m){
        for(let i = 0; i < m.rows; i++){
            for(let j = 0; j < m.cols; j++){
                if(i == j){
                    m.data[i][j] = 1;
                }else{
                    ma.data[i][j] = 0;
                }
            }
        }
    }
    //Matriz Transposta
    static matrixTranspose(m){
        let newMatrix = new Matrix(m.cols, m.rows);
        for(let i = 0; i < m.rows; i++){
            for(let j = 0; j < m.cols; j++){
                newMatrix.data[j][i] = m.data[i][j];
            }
        }
        return newMatrix;
    }
    //Matriz Oposta
    static matrixOpposite(m){
        let newMatrix = new Matrix(m.rows, m.cols);
        for(let i = 0; i < m.rows; i++){
            for(let j = 0; j < m.cols; j++){
                newMatrix.data[i][j] = m.data[i][j] * -1;
            }
        }
        return newMatrix;
    }
    //Adição de matrizes
    static matrixAdd(m1, m2){
        if(m1.rows != m2.rows || m1.cols != m2.cols){
            console.log("Matrizes de tamanhos diferentes");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m1.cols);
        for(let i = 0; i < m1.rows; i++){
            for(let j = 0; j < m1.cols; j++){
                newMatrix.data[i][j] = m1.data[i][j] + m2.data[i][j];
            }
        }
        return newMatrix;
    }
    //Subtração de matrizes
    static matrixSub(m1, m2){
        if(m1.rows != m2.rows || m1.cols != m2.cols){
            console.log("Matrizes de tamanhos diferentes");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m1.cols);
        for(let i = 0; i < m1.rows; i++){
            for(let j = 0; j < m1.cols; j++){
                newMatrix.data[i][j] = m1.data[i][j] - m2.data[i][j];
            }
        }
        return newMatrix;
    }
    //Multiplicação de matrizes
    static matrixMult(m1, m2){
        if(m1.cols != m2.rows){
            console.log("Não é possível multiplicar as matrizes.");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m2.cols);
        for(let i = 0; i < m1.rows; i++){
            for(let j = 0; j < m2.cols; j++){
                for(let k = 0; k < m1.cols; k++){
                    newMatrix.data[i][j] += m1.data[i][k] * m2.data[k][j];
                }
            }
        }
        return newMatrix;
    }
}


let m1 = new Matrix(2, 3);
let m2 = new Matrix(3, 2);

Matrix.matrixRandom(m1);
Matrix.matrixRandom(m2);

console.table(m1.data);
console.table(m2.data);

