//programmers coding test 
//lv1. 문자열 내 p와 y의 개수 
//https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = true;
    let lowerCase = s.toLowerCase();
    let pLength = lowerCase.split('p').length;
    let yLength = lowerCase.split('y').length;
    answer = (pLength == yLength) ? true : false;
    return answer;
}