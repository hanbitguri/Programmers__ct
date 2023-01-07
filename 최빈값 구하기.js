function solution(array) {
    const state = {}
    let arr=[]
   if(array.length===1) return array[0]
   array.forEach((num)=>{
       state[num] = ++state[num]||1
   }) 
    for(let key in state){
        arr.push([key,state[key]])
    }
    if(arr.length===1) return Number(arr[0][0])
    arr.sort((a,b)=>b[1]-a[1])
    if(arr[0][1]===arr[1][1]) return -1
    else return Number(arr[0][0])
   
    
}