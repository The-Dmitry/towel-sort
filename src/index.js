
// You should implement your task here.
module.exports = function towelSort (matrix) {
    let temp = []
    let result = []
    if(typeof matrix == 'undefined') return []
    for(let i = 0; i < matrix.length; i++) {
        if(i % 2 != 0) {
            temp.push(matrix[i].reverse())
        } else {
            temp.push(matrix[i])
        }
    }
    temp.map(e=> e.forEach(e=> result.push(e)))
    return result
}
