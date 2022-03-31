import './App.css';
import { useState } from "react";

function App() {

  const [itemList, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listItemsHTML, setListItemsHTML] = useState([]);




  const addItem = () => {
    itemList.push(inputValue);
    let itemsToAdd = itemList.map((x, i) => <li key={i}>{x}</li>);
    setListItemsHTML(itemsToAdd);
    setInputValue("");
  }



  return (
    <div className="globalContainer">
      <h1>To do</h1>
      <div className="paperContainer">
        <input id="inputToDo" type="text" onChange={e => setInputValue(e.target.value)} onKeyPress={e => { if (e.key === "Enter") { addItem() } }} value={inputValue} placeholder="What needs to be done?" />
        <div id="paper-1">
          <ul>{listItemsHTML}</ul>
          <p id='itemsLeft'>{itemList.length} items left</p>
        </div>
        <div id="paper-2"></div>
        <div id="paper-3"></div>
      </div>

    </div>

  );
}

export default App;
