const apple = {
  name: "apple",
  display: function () {
    console.log(`${this.name}: 🍇`); // 객체 안에서 자신의 데이터에 접근할 때는 this를 붙인다.
  },
};

apple.display(); // 호출 apple: 🍇
