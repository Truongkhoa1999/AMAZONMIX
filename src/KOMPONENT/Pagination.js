import "../STYLE/Pagination.css";
import { useState } from "react";

import CircleButton from "../KOMPONENT/CircleButton";
import CircleButtonL from "../KOMPONENT/CircleButtonL";

function Pagination() {
  const [value, setValue] = useState(1);

  function rangeSlide(event) {
    setValue(event.target.value);
  }

  function incrementRangeSlide() {
    const newValue = parseInt(value) + 1;
    if (newValue <= parseInt(document.querySelector(".range").max)) {
      setValue(newValue);
    }
  }

  function decrementRangeSlide() {
    const newValue = parseInt(value) - 1;
    if (newValue >= parseInt(document.querySelector(".range").min)) {
      setValue(newValue);
    }
  }

  return (
    <div className="paginationWrapper">
      <div className="sliderWrapper">
        <input
          className="range silderContent"
          type="range"
          value={value}
          min="1"
          max="3"
          onChange={rangeSlide}
          disabled
        />

        <div className="sliderNumber">
          <span id="rangeValue">
            {value.toLocaleString("en-US", { minimumIntegerDigits: 2 })}
          </span>
          <span id="rangeValueLeft" style={{ color: "#CECECE" }}>
            03
          </span>
        </div>
      </div>
      <div className="buttonWrapper">
        <CircleButtonL onClick={decrementRangeSlide} />
        <CircleButton onClick={incrementRangeSlide} />
      </div>
    </div>
  );
}

export default Pagination;
