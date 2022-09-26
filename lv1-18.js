//programmers coding test 
//lv1. 수박수박수박수박수박수?
//https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = '';
    //  for(let i=1; i<=n; i++){
    //     if(i % 2 === 0){
    //         answer += "박"
    //     }else{
    //         answer += "수"
    //     }
    // }
    return '수박'.repeat(n).substring(0,n);
}