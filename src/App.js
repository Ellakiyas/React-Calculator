//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [result,setResult]=useState("hi");
  return (
    <div className="container">
    <form>
    <input type="text" value={result}/>
    </form>
    <div className="keypad">
    <button>CLEAR</button>
    <button>C</button>
    <button>&divide;</button>
    <button>9</button>
    <button>8</button>
    <button>7</button>
    <button>&times;</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>&ndash;</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>0</button>
    <button>.</button>
    <button>=</button>
    </div>
    </div>
  );
}

export default App;
