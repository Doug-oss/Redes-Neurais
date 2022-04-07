class Matriz{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        //Preenche a matriz mxn com 0
        this.data = Array(rows).fill().map(() => Array(cols).fill(0));
    }
    //Randomiza os numeros
    static random(matrix){
        for(let i = 0; i < matrix.rows; i++){
            for(let j = 0; j < matrix.cols; j++){
                matrix.data[i][j] =Math.floor(Math.random() * 10);
            }
        }
    }
    //Matriz Identidade
    static matrixI(matrix){
        for(let i = 0; i < matrix.rows; i++){
            for(let j = 0; j < matrix.cols; j++){
                if(i == j){
                    matrix.data[i][j] = 1;
                }else{
                    matrix.data[i][j] = 0;
                }
            }
        }
    }
}