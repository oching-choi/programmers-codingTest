//programmers coding test 
//lv1. 나누어 떨어지는 숫자 배열
//https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    //arr 인자 중 나누어떨어지는 수 answer에 push 
    for(i=0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer.push(arr[i])
        }
    }
    //answer이 비어있다는 건 나누어떨어지는 수가 없었다는 것
    if(answer.length == 0){
        answer.push(-1)
    }
    //answer 오름차순 정렬
    answer.sort((a,b) => a-b)
    return answer;
}