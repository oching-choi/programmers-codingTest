//programmers coding test 
//lv1. 짝수와 홀수
//https://school.programmers.co.kr/learn/courses/30/lessons/12937#

function solution(num) {
    var answer = '';
    if(num%2==1){
        answer = "Odd"
    }else{
        answer = "Even"
    }
    return answer;
}