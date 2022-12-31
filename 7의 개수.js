function solution(array) {
    let count=0
    let arr=[...(''+array)].map((value)=>{
        if(value==='7') count+=1
    })
    return count
}