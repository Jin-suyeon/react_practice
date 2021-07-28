import React, { useState } from "react";
import "./MapManyButtonClick.css";

function MapOneButton() {
  const numbers = [1, 2, 3, 4, 5];

  const [button, setButton] = useState({
    click: new Array(numbers.length).fill(false),
  });

  const buttonClick = (idx) => {
    const newArr = new Array(numbers.length).fill(false);
    newArr[idx] = true;
    setButton({
      click: newArr,
    });
  };

  return (
    <div className="container">
      <div className="many_buttonClick">
        <h5>./practice_map_button/MapManyButtonClick</h5>
        <h3>
          map 함수를 사용하여 한개의 버튼만 누를 수 있게 하는 함수(1차원 배열)
        </h3>
        <div>
          {numbers.map((el, idx) => (
            <span
              key={idx}
              onClick={() => buttonClick(idx)}
              className={button.click[idx] ? "red" : "button"}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MapOneButton;
