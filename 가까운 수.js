function solution(array, n) {
    array.sort()
    let arr = []
    for(let i=0;i<array.length;i++){
        arr.push(Math.abs(n-array[i]))
    }
    return array[arr.indexOf(Math.min(...arr))]
}