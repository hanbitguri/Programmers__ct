function solution(emergency) {
    let result = [...emergency]
    for(let i=1;i<=emergency.length;i++){
        let index = emergency.indexOf(Math.max(...emergency))
        emergency.splice(index,1,0-i)
        result.splice(index,1,i)
    }
    return result
   
}