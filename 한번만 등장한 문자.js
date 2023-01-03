function solution(s) {
    let arr=[...s]
    let result=[]
    let stat = {}
    for(let i=0;i<arr.length;i++){
        stat[arr[i]]=0
    }
    for(let i=0;i<arr.length;i++){
        stat[arr[i]]+=1
    }
    for(let word in stat){
        if(stat[word]===1) result.push(word)
    }
     return result.sort().join('')
 }