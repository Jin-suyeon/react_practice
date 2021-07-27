import React, { useState } from 'react';
import './MapManyButtonClick.css'

function MapManyButtonClickTwo() {

  const numbers2 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  ]

  const [button, setButton] = useState({ click: new Array(numbers2.length).fill(false).map((el) => new Array(numbers2[0].length).fill(false)) })

  const buttonClick = (numsIdx, numIdx) => {
    setButton({
      click: button.click.map((el1, idx1) => {
        return el1.map((el2, idx2) => {
          return idx2 === numIdx && idx1 === numsIdx ? !el2 : el2
        })
      })
    })
  }


  return (
    <div className="container">
      <div className="many_buttonClick">
        <h5>./practice_map_button/MapManyButtonClick</h5>
        <h3>map 함수를 사용하여 여러개의 버튼을 각각 누를 수 있게 하는 함수(2차원 배열)</h3>
        <div>
          {numbers2.map((nums, numsIdx) => {
            return nums.map((num, numIdx) => {
              return <span
                onClick={() => buttonClick(numsIdx, numIdx)}
                className={button.click[numsIdx][numIdx] ? 'red' : 'button'}>{num}</span>
            })
          })}
        </div>
      </div>
    </div>
  );
}

export default MapManyButtonClickTwo