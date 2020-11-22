import logo from './logo.svg';
import './App.css';
console.log(logo)

function sayHi() {
  alert('这是react的点击事件')
}
function App() {
  return (
    //XML
    //会将下面标签变成js -JSX
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React也不过如此
        </p>
        <p>编辑App.js就能改变页面展示</p>
        <button onClick={ sayHi }>点击事件</button>
      </header>
    </div >
  );
}

export default App;
