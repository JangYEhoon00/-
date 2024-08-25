# 개요 
  웹사이트를 구현하기 위해 이러한 변수들을 사용함 

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



## 단어가 일치하는지 확인하는 방법
  편의를 위해 단어의 대문자 소문자 구별은 하지 않음 단어가 일치한다면 점수가 올라가는 기능을 한 함수에 구현함

## 게임을 실행하는 함수
  게임을 실행하는 함수는 isPlaying 값을 참으로 변경하여 추후에 사용될 함수에서 작동할 수 있게 설정함
  
## 단어들을 불러오는 방법
  단어들을 불러오는 방식은 외부 api를 사용하였고 내부메서드인 init() 메서드를 사용해 단어들을 일치하는지 확인할 수 있는 작업을 함
  
## 숫자 카운트 다운
  개암을 시항하면서 값이 참으로 바뀐 isPlaying를 시간이 0과 같아지거나 작아질 경우 값을 거짓으로 변경하여 html에 표시되는 값을 0으로 변경함
