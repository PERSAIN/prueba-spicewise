const utils = {
    createMatrix: (rowsNumber, columnsNumber) => {
        let matrix = [];
        for (let i = 0; i < rowsNumber; i++) {
            let actualRow = [];
            for (let j = 0; j < columnsNumber; j++) {
                actualRow.push(Math.round(Math.random() * 100));
            }
            matrix.push(actualRow);
        }
        return matrix;
    }
};

export default utils;