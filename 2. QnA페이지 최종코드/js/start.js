const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

//상태바를 위한 endPoint
const endPoint = 10


function addAnswer(answerText,qIdx){
    var a = document.querySelector('.answerBox');
    // createElement 설명 
    var answer = document.createElement('button');

    // 답변마다 클래스를 추가해준다.
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');

    // 버튼에 애니메이션 부가하기
    answer.classList.add('fadeIn');

    // answer가 a에 소속될 수 있도록 만듬
    a.appendChild(answer);
    answer.innerHTML = answerText; 
    // 이러면 버튼을 잘 불러온다 !
    //onClick 속성을 addEventListener로 준다.
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList');  //버튼 3개 선택
        for(let i=0;i<children.length;i++){
            children[i].disabled = true; //버튼 비활성화되게
            //버튼 사라지는 애니메이션
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        // 사라지는 순간 바로 none이 되면 안되니깐 setTimeout 함수제작 
        setTimeout(()=>{
            for(let i=0 ;i<children.length;i++){
                children[i].style.display = 'none'; // 버튼들 안보이게
            }
            goNext(++qIdx);
        },450)
        
    },false)
}


function goNext(qIdx){

    var q = document.querySelector('.qBox');
    // q.innerHTML = qnaList[0].q // 출력되는거 확인 가능 
    q.innerHTML = qnaList[qIdx].q; // 출력되는거 확인 가능 
    // 변수 도입 
    // goNext가 끝나고 또 호출 해야함 
    // 답은 버튼으로 만들어야함
    // 여러개 해야하니깐 반복문 사용해야함
    //배열이니깐 총 3번 반복됨
    for(let i in qnaList[qIdx].a)
    {
        //질문 더하는 함수 
        addAnswer(qnaList[qIdx].a[i].answer,qIdx);
    }
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;
    //상태바 만들기
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+'%'
}


// 화면전환 
function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation="fadeIn 1s"; 
        setTimeout(()=>{
            main.style.display = "none";
            qna.style.display="block"
        },450)
        let qIdx = 0;
        goNext(qIdx);
    },450);
}