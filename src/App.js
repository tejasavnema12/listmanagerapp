import React, { useState } from "react";
import ReactDOM from "react-dom";
 // Import the CSS file
import "./style.css"
function App() {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [inputValue, setInputValue] = useState(""); // State for the input field value

  // Function to handle adding a new item to the list
  const addItem = () => {
    if (inputValue.trim() !== "") { // Ensure the input is not empty or just whitespace
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field after adding
    }
    if (inputValue.trim() === "") { // Check if input is empty
      alert("Please enter an item to add."); // Alert if input is empty
      return; // Prevent adding an empty item
    }
  };

  // Function to handle deleting an item
  const deleteItem = (index) => {
    const newItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItems(newItems); // Update the state by removing the deleted item
  };

  return (
    <div className="container">
      {/* Navbar */}
      <div className="navbar">
        <h1>Item List Manager</h1>
      </div>

      {/* Main Content */}
      <div className="content">
        <h2>Item List</h2>
        <div className="input-container">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a new item"
          />
          <button onClick={addItem}>
            Add Item
          </button>
        </div>
        <ul className="list">
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button 
                className="delete-btn"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;
// Render the application
//ReactDOM.render(<ItemListManager />, document.getElementById("root"));
