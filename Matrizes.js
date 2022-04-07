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
                m.data[i][j] =Math.floor(Math.random() * 10);
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
}

