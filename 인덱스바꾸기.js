function solution(str, num1, num2) {
    let arr = str.split('')
    let arr2 = [...arr]
    arr.splice(num1,1,arr[num2])
    arr.splice(num2,1,arr2[num1])
    return arr.join('')
}