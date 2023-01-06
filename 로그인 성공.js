function solution(idpw, db) {
    let ans =''
    for(let i=0;i<db.length;i++){
       if(idpw[0]===db[i][0] && idpw[1]!=db[i][1]) ans = 'wrong pw' 
     else if(idpw[0]!=db[i][0] && idpw[1]!=db[i][1]) ans= 'fail' 
     else if(idpw[0]===db[i][0] && idpw[1]===db[i][1]) ans= 'login' 
    }
    return ans
}