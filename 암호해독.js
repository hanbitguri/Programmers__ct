function solution(words, n) {
    let arr = [...words]
    let newArr = []
    if(n===1){
    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i])
    }
    return newArr.join('')    
    }
    else{
     for(let i=0;i<arr.length;i++){
        newArr.push(arr[(i*n)-1])
    }
    return newArr.join('')     
    }
   
}