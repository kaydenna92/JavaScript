// 웹사이트의 실질적인 상호작용에는 이벤트가 필요하다
// 이벤트는 브라우저에서 발생하는 일을 듣고 그에 대한 반응으로 코드를 실행하는 코드 구조
// 예를 들어 마우스로 무언가를 클릭하면 브라우저가 발생시키는 클릭 이벤트가 있다.

document.querySelector('html').onclick = function() {
    alert('Ouch! stop pocking me!');

}

// 위의 코드는 아래와 같다
let myHtml = document.querySelector('html');
myHtml.onclick = function(){};


// 이미지가 클릭될 때 이미지를 전환하는 함수

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');

    if (mySrc === 'image/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}


// 개인화된 환영 메시지 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("Please enter your name"); 
    if (!myName || myName == null) { // 예외 처리(null 또는 공백일 경우)
        setUserName();
    }
    localStorage.setItem('name', myName); // 브라우저 api 호출
    myHeading.textContent = "안녕하세요, " + myName;

}

if (!localStorage.getItem('name')){  // 로컬스토리지에 name이 존재하지 않을 경우, 함수 호출
    setUserName();

} else { // 존재한다면, 해당 이름으로 환영메시지 세팅
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "안녕하세요, " + storedName;
}