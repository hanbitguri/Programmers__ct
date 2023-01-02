function solution(letter) {
    const morse = { 
     '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
     '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
     '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
     '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
     '-.--':'y','--..':'z'
 }
    let arr = letter.split(' ')
    let result = [] 
    for(let i=0;i<arr.length;i++){
       result.push(morse[arr[i]])
    }
    return result.join('')
     
 }