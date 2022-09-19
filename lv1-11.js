//programmers coding test 
//lv1. 콜라츠 추측
//https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    var answer = 0;
    for(let i = 0; i<500; i++){
        if(num !==1){
            num%2 === 0 ? num/=2 : num = num*3 + 1 
        }else{
            return answer = i;
        }
    }
    return answer = -1;
}