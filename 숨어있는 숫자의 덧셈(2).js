function solution(str) {
    let result =0;
    let arr = str.match(/[0-9]\d*/g)
    if(arr){
    arr.forEach((num)=>{
        result += Number(num)
    })    
    }else return 0
    
    return result
    
}