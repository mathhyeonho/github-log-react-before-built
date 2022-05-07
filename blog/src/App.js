import './App.css';
import logo from './logo.svg';

function App() {
  
  let posts = '강남 고기 맛집'; 
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style = { { color : 'blue', fontSize : '30px'} }>개발 Blog</div>
      </div>
      <h4> {posts} </h4>
      <h4> { 함수() }</h4>
      <img src = {logo}/>
    </div>
  );
}
// react를 쓰는 이유 : 데이터 바인딩이 쉽다 위에서의 let posts 한뒤 {posts}이런 느낌
// 중괄호가 포인트


export default App;
