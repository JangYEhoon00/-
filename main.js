//사용변수
const GAME_SETTING = 10;
let score = 0;
let time = GAME_SETTING;
let isPlaying = false;
let timeIneterval;
let words = [];

const wordInput = document.querySelector('.word-input');
const wordDisplay = document.querySelector('.word-display');
const scoreDisplay = document.querySelector('.score');
const timeDisplay = document.querySelector('.time');
const button = document.querySelector('.button');

init();

function init(){
    getWords();
    wordInput.addEventListener('input',checkMatch)
}

//게임실행
function run(){
    isPlaying = true;
    time = GAME_SETTING;
    wordInput.focus();
    scoreDisplay.innerText = 0;
    timeIneterval = setInterval(countDown, 1000);
    checkInterval = setInterval(checkStatus, 50);
    buttonChange('게임중');
}

function checkStatus(){
    if(isPlaying && time === 0){
        buttonChange('게임시작')
        clearInterval(checkInterval)
    }
}
//단어 불러오기
function getWords(){
    axios.get('/user?ID=12345')
        .then(function (response) {
            // handle success
            console.log(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    words = ['Hello', 'Kakao', 'IlIlllI', 'trap'];
    buttonChange('게임시작');
};


//단어가 일치하는지 확인 
function checkMatch(){
    if(wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()){
        wordInput.value = "";
        if(isPlaying){
        score++;
        scoreDisplay.innerText = score;
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.innerText = words[randomIndex];
        };
    };
};
//숫자 카운트 다운 함수
function countDown(){
    if(time > 0){
        time--;
        timeDisplay.innerText = time;
    } else {
        isPlaying = false;
        clearInterval(timeIneterval);
        timeDisplay.innerText = 0;
    }
}


function buttonChange(Text){
    button.innerText = Text;
    Text === '게임시작' ? button.classList.remove('loading') : button.classList.add('loading');
}