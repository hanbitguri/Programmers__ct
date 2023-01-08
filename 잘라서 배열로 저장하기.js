function solution(str, n) {
    let arr=[...str]
    let result=[]
    for(let i=0;i=arr.length/n;i++){
    result.push(arr.splice(0,n).join(''))
        
    }
    
    
     return result
 }
 solution('abcdef123',3)