//programmers coding test 
//lv1. 자연수 뒤집어 배열로 만들기
//https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
    var answer = [];
    answer = n.toString().split('').map(str => Number(str)).reverse();
    return answer;
}