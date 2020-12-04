function solution(n) {
    let answer = [];
    let arr;
    n = n.toString();
    arr = [...n];
    arr.reverse();
    for(let i in arr) {
      answer.push(Number(arr[i]));
    }
    return answer;
}
// 자연수 뒤집어 배열로 만들기