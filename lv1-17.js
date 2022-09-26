//programmers coding test 
//lv1. 음양 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
    var answer = 0;
    for(i=0; i<absolutes.length; i++){
        if(signs[i] === true){
            answer = answer + absolutes[i]
        }else{
            answer = answer - absolutes[i]
        }
    }
    return answer;
}