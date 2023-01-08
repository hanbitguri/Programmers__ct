function solution(num_list, n) {
    let result=[]
    for(let i=0;i<num_list.length;i=i+n){
        let arr=[]
        for(let j=i;j<i+n;j++){
            arr.push(num_list[j])
        }
        result.push(arr)
        
    }
    return result
}
   
  
