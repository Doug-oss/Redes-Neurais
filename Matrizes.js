class Matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.data = Array(rows).fill().map(() => Array(cols).fill(0));
    }
    static randomize(matrix){
        for(let i = 0; i < matrix.rows; i++){
            for(let j = 0; j < matrix.cols; j++){
                matrix.data[i][j] =Math.floor(Math.random() * 10);
            }
        }
    }
}

m1 = new Matrix(2,2);
m2 = new Matrix(2,2);

m1 = Matrix.randomize(m1);
m2 = Matrix.randomize(m2);

