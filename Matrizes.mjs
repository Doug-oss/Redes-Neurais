export class Matrix {
    //Define numero de linhas e colunas
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        //Preenche a matriz rXc com 0
        this.data = Array(rows).fill().map(() => Array(cols).fill(0));

    }
    //arrayToMatrix
    static arrayToMatrix(array) {
        let matrix = new Matrix(array.length, 1);
        for (let i = 0; i < array.length; i++) {
            matrix.data[i][0] = array[i];
        }
        return matrix;
    }


    //Randomiza os numeros
    static random(m) {
        let newMatrix = new Matrix(m.rows, m.cols);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                //numeros gauseanos
                newMatrix.data[i][j] = Math.random() * 2 - 1;
            }

        }
        return newMatrix;

    }

    //map
    static map(m, func) {
        let newMatrix = new Matrix(m.rows, m.cols);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                newMatrix.data[i][j] = func(m.data[i][j]);
            }

        }
        return newMatrix;

    }

    //Matriz Identidade
    static identy(m) {
        let newMatrix = new Matrix(m.rows, m.cols);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                if (i == j) {
                    m.data[i][j] = 1;
                } else {
                    ma.data[i][j] = 0;
                }

            }

        }
        return newMatrix;

    }

    //Matriz Transposta
    static transpose(m) {
        let newMatrix = new Matrix(m.cols, m.rows);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                newMatrix.data[j][i] = m.data[i][j];
            }
        }
        return newMatrix;

    }

    //Matriz Oposta
    static opposite(m) {
        let newMatrix = new Matrix(m.rows, m.cols);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                newMatrix.data[i][j] = m.data[i][j] * -1;
            }
        }
        return newMatrix;

    }

    //Adi????o de matrizes
    static add(m1, m2) {
        if (m1.rows != m2.rows || m1.cols != m2.cols) {
            console.log("Matrizes de tamanhos diferentes");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m1.cols);
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                newMatrix.data[i][j] = m1.data[i][j] + m2.data[i][j];
            }
        }
        return newMatrix;

    }

    //Subtra????o de matrizes
    static subtract(m1, m2) {
        if (m1.rows != m2.rows || m1.cols != m2.cols) {
            console.log("Matrizes de tamanhos diferentes");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m1.cols);
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                newMatrix.data[i][j] = m1.data[i][j] - m2.data[i][j];
            }
        }
        return newMatrix;

    }

    //Multiplica????o de matrizes
    static multiply(m1, m2) {
        if (m1.cols != m2.rows) {
            console.log("N??o ?? poss??vel multiplicar as matrizes.");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m2.cols);
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m2.cols; j++) {
                for (let k = 0; k < m1.cols; k++) {
                    newMatrix.data[i][j] += m1.data[i][k] * m2.data[k][j];
                }
            }
        }
        return newMatrix;

    }

    //Multiplica????o de matriz por escalar
    static scalarMultiply(m, n) {
        let newMatrix = new Matrix(m.rows, m.cols);
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                newMatrix.data[i][j] = m.data[i][j] * n;
            }
        }
        return newMatrix;

    }

    //hadamard
    static hadamard(m1, m2) {
        if (m1.rows != m2.rows || m1.cols != m2.cols) {
            console.log("Matrizes de tamanhos diferentes");
            return;
        }
        let newMatrix = new Matrix(m1.rows, m1.cols);
        for (let i = 0; i < m1.rows; i++) {
            for (let j = 0; j < m1.cols; j++) {
                newMatrix.data[i][j] = m1.data[i][j] * m2.data[i][j];
            }
        }
        return newMatrix;

    }
    //matrix to array
    static matrixToArray(m) {
        let array = [];
        for (let i = 0; i < m.rows; i++) {
            for (let j = 0; j < m.cols; j++) {
                array.push(m.data[i][j]);
            }
        }
        return array;
    }
    //Deteminante de matriz
    static determinant(m) {
        if (m.rows != m.cols) {
            console.log("Matriz n??o ?? quadrada.");
            return;
        }
        //ordem 1
        if (m.rows == 1 && m.cols == 1) {
            return m.data[0][0];
        }
        //ordem 2
        if (m.rows == 2 && m.cols == 2) {
            return m.data[0][0] * m.data[1][1] - m.data[0][1] * m.data[1][0];
        }
        //ordem 3
        if (m.rows == 3 && m.cols == 3) {
            return m.data[0][0] * m.data[1][1] * m.data[2][2] + m.data[0][1] * m.data[1][2] * m.data[2][0] + m.data[0][2] * m.data[1][0] * m.data[2][1] - m.data[0][2] * m.data[1][1] * m.data[2][0] - m.data[0][1] * m.data[1][0] * m.data[2][2] - m.data[0][0] * m.data[1][2] * m.data[2][1];
        }
        //Teorema de laplace
        if (m.rows > 3 && m.cols > 3) {
            let det = 0;
            for (let i = 0; i < m.cols; i++) {
                let newMatrix = new Matrix(m.rows - 1, m.cols - 1);
                for (let j = 1; j < m.rows; j++) {
                    for (let k = 0; k < m.cols; k++) {
                        if (k < i) {
                            newMatrix.data[j - 1][k] = m.data[j][k];
                        } else if (k > i) {
                            newMatrix.data[j - 1][k - 1] = m.data[j][k];
                        }
                    }
                }

                det += Math.pow(-1, i) * m.data[0][i] * Matrix.matrixDeterminant(newMatrix);
            }

            return det;

        }

    }

}
