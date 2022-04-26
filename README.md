# likelionFrontendJS-4
멋쟁이사자처럼 프론트엔드 파트 JavaScript 4번째 교육 실습 코드입니다. 

# 0.start 

초기파일입니다.

# 1. main
테스트의 메인페이지 최종파일입니다.
### 목표 
1. main페이지 만들기 
2. main페이지 -> qna페이지로 이동하기


## 사용한 JS 문법
### setTimeout(): 이 메서드는 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.
``` 
var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
var timeoutID = setTimeout(function[, delay]);
var timeoutID = setTimeout(code[, delay]);
```
#### function
타이머가 만료된 뒤 실행할 function입니다.

#### code
함수 대신 문자열을 지정하는 대체 구문으로, 타이머가 만료될 때 코드로 컴파일 후 실행합니다. eval()이 보안 취약점인 것과 같은 이유로 사용을 권장하지 않습니다.

####  delay
주어진 함수 또는 코드를 실행하기 전에 기다릴 밀리초 단위 시간입니다. 생략하거나 0을 지정할 경우 "즉시", 더 정확히는 다음 이벤트 사이클에 실행한다는 뜻입니다. 그러나 실제 딜레이는 의도했던 것보다 더 길 수 있습니다. 아래의 딜레이가 지정한 값보다 더 긴 이유를 참고하세요.

#### arg1, ..., argN 
function에 전달할 추가 매개변수입니다.

<출처 : MDN>



# 2. qna
테스트의 질문페이지 최종파일입니다.
### 목표 
Data -> html로 가져오기

### setTimeout(): 이 메서드는 만료된 후 함수나 지정한 코드 조각을 실행하는 타이머를 설정합니다.



# 3. result

테스트의 결과페이지 최종파일입니다.


# 4. 최종 
공유,배포를 담은 테스트의 최종파일입니다.
