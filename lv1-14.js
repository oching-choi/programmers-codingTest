//programmers coding test 
//lv1. 핸드폰 번호 가리기
//https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
    var answer = phone_number.replace(/\d(?=\d{4})/g,"*");
    return answer;
    
// 정규식 규칙
// /      / 패턴을 쓸공간
// /g global 적용. g를 쓰지않으면 한개의 문자에 대해서만 적용됨.
// \d는 모든 숫자 [0-9]와 동일
// x(?=y) : y에 대한 조건을 허용하는 것을 뒤따라오는 x에만 대응된다. 대응 되면 x의 값을 바꾼다.
// x(?!y) : x에 대한 조건을 허용하는 것을 뒤따라오는 y에만 대응된다. 대응 되면 x의 값을 바꾼다.
// {n} 앞 표현식이 n번 나타나는 부분에 대응된다. 반드시 양의 정수여야함.
}
