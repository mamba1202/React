import logo from './logo.svg';
import './App.css';
import BoxOne from './components/BoxOne.js'
import Mamba from './components/button.js'
import AppPass from './components/PassByValue.js'
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
        <button onClick={sayHi}>点击事件</button>
      </header>

      <BoxOne fristLine="prop传参"></BoxOne>
      <BoxOne></BoxOne>


      <Mamba value="按钮"></Mamba>
      <Mamba value="按钮"></Mamba>
      <Mamba value="按钮"></Mamba>


      <AppPass></AppPass>

    </div>
  );
}

export default App;
