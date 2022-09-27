//programmers coding test 
//lv1. 가운데 글자 가져오기 
//https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    var answer = '';
    let half = Math.floor(s.length/2) 
    if(s.length%2 == 0){
        answer = s.slice(half-1,half+1)
    }else{
        answer = s.slice(half, half+1)
    }
    return answer;
}