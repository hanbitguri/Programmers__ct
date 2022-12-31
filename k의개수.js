function solution(a, b, k) {
    let count = 0
    let arr=[]
    for(let i=a;i<=b;i++){
        arr.push(''+i)
    }
    let arr2=[...(''+arr)]
    for(let i=0;i<arr2.length;i++){
        if(arr2[i]===k.toString()) count+=1
    }

    return count
}