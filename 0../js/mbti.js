const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");

const endPoint = 10;

const select = [0,0,0,0];

function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    
    answer.classList.add('fadeIn');

    a.appendChild(answer);

    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); 
        for(let i=0;i<children.length;i++){
            children[i].disabled = true;

            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
        }
        setTimeout(()=>{

            var target = qnaList[qIdx].a[idx].type;

            for(let i=0;i<target.length;i++){
                select[target[i]]+=1 
            }

            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    },false)
}

function calResult(){
    var result = select.indexOf(Math.max(...select));
    return result; 

}
function setResult(){
    let point = calResult();
    
    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = infoList[point].nameIntro; 

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = 'img/image-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    
    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDescTitle1.innerHTML = infoList[point].descTitle1;
    resultDesc1.innerHTML = infoList[point].desc1;
  
    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    resultDescTitle2.innerHTML = infoList[point].descTitle2;
    resultDesc2.innerHTML = infoList[point].desc2;
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";            
        }, 450);
    },450);

    setResult();
}

function goNext(qIdx){
    if(qIdx == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%"

}

function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";            
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
}