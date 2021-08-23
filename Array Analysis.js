function arrayAnalysis(array){

    const min = Math.min(...array);
    const max = Math.max(...array);
    const average = (min*max)/2;
    const length = array.length;

    return{average:average, min:min, max:max, length:length}

}

module.exports = arrayAnalysis;