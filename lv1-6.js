//programmers coding test 
//lv1. 평균구하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
    var answer = 0;
    const sum = arr.reduce((a,b) => a+b)
    answer = sum/arr.length;
    console.log(sum)
    return answer;
}