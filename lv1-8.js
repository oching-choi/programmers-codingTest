//programmers coding test 
//lv1. 정수 내림차순으로 배치하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
    var answer = 0;
    let strArr = n.toString().split('')
    answer = Number(strArr.sort((a,b)=> b-a).join(''))
    return answer;
}