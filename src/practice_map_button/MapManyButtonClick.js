import React, { useState } from 'react';
import './MapManyButtonClick.css'

function MapManyButtonClick() {

  const numbers = [1, 2, 3, 4, 5]

  const [button, setButton] = useState({click: new Array(numbers.length).fill(false)})

  const buttonClick = (numIdx) => {
    setButton({
      click: button.click.map((el, idx) => {
        return numIdx === idx ? !el : el;
      })
    })
  }


  return (
    <div className="container">
      <div className="many_buttonClick">
        <h3>map 함수를 사용하여 여러개의 버튼을 각각 누를 수 있게 하는 함수(1차원 배열)</h3>
        <div>
          {numbers.map((el, numIdx) => <span 
          onClick={() => buttonClick(numIdx)}  
          className={button.click[numIdx] ? 'red' : 'button'}>{el}</span>)}
        </div>
      </div>
    </div>
  );
}

export default MapManyButtonClick