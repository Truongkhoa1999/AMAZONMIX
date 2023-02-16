import "../STYLE/Pagination.css";
import { useState } from 'react';
import "../KOMPONENT/CircleButton"
import CircleButton from "../KOMPONENT/CircleButton";

function Pagination() {
    const [value, setValue] = useState(1);
  
    function rangeSlide(event) {
      setValue(event.target.value);
    }
  
    function incrementRangeSlide() {
      const newValue = parseInt(value) + 1;
      if (newValue <= parseInt(document.querySelector('.range').max)) {
        setValue(newValue);
      }
    }
  
    function decrementRangeSlide() {
      const newValue = parseInt(value) - 1;
      if (newValue >= parseInt(document.querySelector('.range').min)) {
        setValue(newValue);
      }
    }
  
    return (
      <div>
        <span id="rangeValue">{value}</span>
        <input
          className="range"
          type="range"
          value={value}
          min="1"
          max="3"
          onChange={rangeSlide}
          disabled
        />
        <span id="rangeValueLeft">3</span>
        <CircleButton onClick={incrementRangeSlide} />
        <button onClick={decrementRangeSlide}>-</button>
      </div>
    );
  }
  
export default Pagination;
