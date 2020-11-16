// 이상한 문자 만들기
// 시도 1차 실패
function solution(s) {
  let answer = [];
      for(let i in s) {
        if(i % 2 === 0) {
          answer.push(s[i].toUpperCase());
        } 
        else {
          answer.push(s[i].toLowerCase());
        }
      }
      return answer.join('');
  }
  