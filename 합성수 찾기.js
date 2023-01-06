function solution(n) {
    let arr = []
    let count=0
    let result =0
   for(let i=4;i<=n;i++){
       arr.push(i)
   }
    for(let i=0;i<arr.length;i++){
        count=0
        for(let j=1;j<=arr[i];j++){
            if(arr[i]%j===0) {
             count += 1
            if(count===3) result += 1    
            }
                 
        }
    }
    return result
    
}