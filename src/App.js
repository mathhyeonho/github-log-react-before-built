import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '여자 코트 추천', '붐붐파우 하는 법']);
  let [따봉 , 따봉변경] = useState(0);
  
  let posts = '강남 고기 맛집'; 

  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천'; // 스테이트를 바꿀려면 복사해서 변경
    글제목변경( newArray );
    }

  function 함수(){
    return 100
  }

  let postss = { color : 'blue', fontSize : '30px'}

  return (
    <div className="App">
      <div className="black-nav">
        <div style = { { color : 'white', fontSize : '30px'} }>개발 Blog</div>
      </div>
      <button onClick = { 제목바꾸기 } > 버튼 </button>
      <div className = "list">
        <h3>{ 글제목[0] } <span onClick = { () => { 따봉변경(따봉 + 1) } }>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{ 글제목[1] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{ 글제목[2] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <h3>{ 글제목[3] }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>



    </div>
  );

}
// react를 쓰는 이유 : 데이터 바인딩이 쉽다 위에서의 let posts 한뒤 {posts}이런 느낌
// 중괄호가 포인트
// state 문법 쓰는 이유 html이 새로고침없이 재랜더링됨

function Modal(){
  return (
    <>
    <div className = "modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
    </>
  )
}
// html를 덩어리로 관리
// 글제목은 function안에서 선언했기에 Modal에서 못씀
// props문법을 사용해서 Modal까지 변수를 전해줘야함


export default App;
