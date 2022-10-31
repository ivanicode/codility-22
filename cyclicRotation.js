function solution(A, K) {
    if(A.length === K){
        return A
    }
    const firstPart = A.slice(0, K - 1)
    const secondPart = A.slice(K - 1)
    const newArray = secondPart.concat(firstPart)
    return newArray
    
}

//25%