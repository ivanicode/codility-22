
function binaryGap(N) {
    const binaryArray = N.toString(2).split('')
    let isFirstOne = false;
    let zeros = 0;
    longestZeros = 0;
    for(let i = 0; i < binaryArray.length; i++){
        if(binaryArray[i] === '1'){
            isFirstOne = true;
        }
        if(isFirstOne && binaryArray[i] === '0'){
            zeros++
        }
        if(isFirstOne && binaryArray[i] === '1'){
            if(longestZeros < zeros){
                longestZeros = zeros
            }
            zeros = 0
        }
    }
    return longestZeros
}