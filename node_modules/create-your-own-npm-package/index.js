
function sumOfArray(arr){
    sum = 0
    arr.forEach(element => {
        sum += element
    });
    return sum
}

module.exports = sumOfArray;