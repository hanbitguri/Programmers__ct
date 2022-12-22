function solution(array) {
    let sort =[]

    for(let i=0 ; i<array.length;i++){
        let index = array.indexOf(Math.min(...array))
        sort.push(...array.splice(index,1))
        i=0
        if(array.length===1) sort.push(array[i])
    }
    let result = sort.concat()
    return result
}

solution([1,4,9,3])
