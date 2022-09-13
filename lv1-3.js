//programmers coding test 
//lv1. 자릿수 더하기
//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')
    const str = n.toString();
    const strArr = str.split('')
    
    for(let i = 0; i<strArr.length; i++){
        answer += parseInt(strArr[i]);
    }
    return answer;
}