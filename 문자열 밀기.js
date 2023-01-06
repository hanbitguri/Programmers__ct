function solution(A, B) {
    let arr = [...A]
    let count=0
    let check=0
    if(A===B) return 0
    for(let i=0;i<arr.length;i++){
        let poped = arr.pop()
        arr.unshift(poped)
        count+=1
        if(arr.join('')===B){
            check=1
            return count
        }
        if(i===arr.length-1 && check===0) return -1
    }
    
}