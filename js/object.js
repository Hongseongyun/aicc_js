// 객체(object)란 키와 값으로 구성된 속성 묶음을 말한다. 배열도 객체의 한 종류이지만 배열을 구성하는 데이터 단위는 '요소'라 하고 객체를 구성하는 데이터 단위는 '속성(property)'라 한다.

const a = () => {};
const b = [];
const c = {};

console.log(typeof a, typeof b, typeof c);

const car = {
  maker: 'hyundai',
  model: 'sonata',
  color: 'black',
  image:
    'https://image.ajunews.com/content/image/2019/03/06/20190306132530379318.jpg',
  price: {
    new: 3000,
    old: 1000,
  },
  location: ['서울', '경기', '인천'],
};

// console.log(car);

// 객체의 접근

// []접근
// console.log(car['model']);
// .접근
// console.log(car.model);
// console.log(car.price.new);
// console.log(car.location[2]);

// box dom 변수
const box = document.querySelector('.box');
const carElmts = `
<div class="image">
  <img src="${car.image}" alt="" />
</div>

<div class="txt">
  <p>${car.color}</p>
  <p>${car.model}</p>
  <p>${car.price.new}만원</p>
  <p>${car.location[0]}지점</p>
</div>
`;

// box.innerHTML = carElmts;
box.insertAdjacentHTML('beforeend', carElmts);

// 객체의 속성으로 함수를 지정할 수 있는데, 이를 메소드(method)라 한다.
const pet = {
  name: '댕댕이',
  eat: function () {
    // 화살표 함수는 전역 객체를 읽기 때문에 못 읽는다.
    console.log(`${this.name}가 밥을 먹는다.`);
  },
};
// console.log(pet.name);
// console.log(pet.eat());

// 내장(built in) 객체
// 1. setTimeout(): 일정 시간 이후 실행

function sayHello() {
  // console.log('Hello Javascript');
}

setTimeout(function () {
  sayHello();
}, 3000);

// 2. setInterval : 일정 시간 마다 실행
// setInterval(function () {
//   sayHello();
// }, 1000);

function dispalyTime() {
  const date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  // if (min < 10) {
  //   min = `0${min}`;
  // }
  min = min < 10 ? '0' + min : min;

  if (sec < 10) {
    sec = `0${sec}`;
  }

  console.log(`${hour} : ${min} : ${sec}`);
}

// setInterval(dispalyTime, 1000);

// trim(): 문자열 앞뒤 공백 및 개행 제거

const str = '       Hello  ';
console.log(':' + str + ':');
const trimStr = str.trim();
console.log(':' + trimStr + ':');

// Math 수학 연산과 관련된 모든 메소드를 포함
// 1. random(): 0과 1사이의 난수를 발생생
console.log(Math.random() * 200);

//2. floor() : 소수점 버림
console.log(Math.floor(Math.random() * 200));

// 3. toFixed(): 소수점 자리수 제한
console.log((Math.random() * 200).toFixed(2));
