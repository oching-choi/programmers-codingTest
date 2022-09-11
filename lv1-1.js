//programmers coding test 
//lv1. 나머지가 1이 되는 수 찾기
//https://school.programmers.co.kr/learn/courses/30/lessons/87389


function solution(n) {
    for(var i = 1; i < n; i++){
        if(n%i == 1){
            return i;
        }
    }
}