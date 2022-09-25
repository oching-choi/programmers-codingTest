//programmers coding test 
//lv1. 제일 작은 수 제거하기 
//https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)),1)
    return arr.length ? arr : [-1];
}