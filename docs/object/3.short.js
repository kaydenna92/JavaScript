const x = 0;
const y = 0;

const coordinate = {
  x: x,
  y: y,
};

// 키 이름과 참조하고 있는 변수의 이름이 동일한 경우 축약을 할 수 있다.
const coordinateShort = { x, y }; // 축약 버전

console.log(coordinateShort); // { x: 0, y: 0 } 왜 0이 할당되는 것일까?

function makeObj(name, age) {
  return {
    name,
    age,
  };
}

console.log(makeObj()); // { name: undefined, age: undefined }
