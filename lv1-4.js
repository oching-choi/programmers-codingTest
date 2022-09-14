//programmers coding test 
//lv1. 정수 제곱근판별
//https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    var answer = 0;
    const x = Math.pow(n,0.5); //x는 n의 제곱근
    if(parseInt(x)>0 && Number.isInteger(x)){ //양의 값이여야하고, 정수여야하고
        answer = (x+1) ** 2
    }else{
        answer = -1
    }
    return answer;
}