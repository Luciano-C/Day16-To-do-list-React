import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  
  const [item, setItem] = useState("");
  let listItemsHTML = [<li>tarea 1</li>, <li>tarea 2</li>];
  
  
  return (
    <div className="globalContainer">
      <h1>To do</h1>
      <div className = "paperContainer">
        <input id="inputToDo" placeholder="What needs to be done?"/>
        <div id="paper-1"><ul>{listItemsHTML}</ul></div>
        <div id="paper-2"></div>
        <div id="paper-3"></div>
      </div>

    </div>

  );
}

export default App;
