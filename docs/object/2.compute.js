const obj = {
  name: "najangyeob",
  age: 20,
};
// 코딩하는 시점에, 정적으로 접근이 확정될 때 아래처럼 사용할 수 있음.
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용.
function getValue(obj, key) {
  // return obj.key; // obj라는 것에 key라는 key가 없으면 x
  return obj[key]; // 동적 속성 접근.
}
console.log(getValue(obj, "name")); // najangyeob

// 동적 속성 추가, 삭제
function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, "job", "student");
console.log(obj); // { name: 'najangyeob', age: 20, job: 'student' }

function deleteKey(obj, key) {
  delete obj[key];
}

deleteKey(obj, "job");
console.log(obj);
