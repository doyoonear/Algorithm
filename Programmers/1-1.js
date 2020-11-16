// 완주하지 못한 선수
// 완료

function solution(participant, completion) {
  const part = participant.slice().sort();
  const comp = completion.slice().sort();
  
  for(let i in part) {
    if(part[i] !== comp[i]) {
      return part[i]
    }
  }
}