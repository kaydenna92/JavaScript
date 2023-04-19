// 생성자 함수.
// 같은 코드를 여러번 반복하면 ..별로.. 이를 해결하는 것이 생성자함수.
// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: 🍇`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name} : 🍊`);
//   },
// };

// console.log(apple);
// console.log(orange);

// 생성자 함수.
// 대문자로 함수를 만들면 생성자 함수를 만들 수 있다.
// this 키워드를 붙이면 객체에 name이라는 key가 생기고, 매개변수로 전달받은 name을 value에 할당할 수 있다.
function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // 생략가능, 자바스크립트 엔진이 자동으로 this를 return 한다.
}

const apple = new Fruit("apple", "🍇");
const orange = new Fruit("orange", "🍊");

console.log(apple);
console.log(orange);
