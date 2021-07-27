import React from 'react';
import '../practice_map_button/MapManyButtonClick.css'
import './MapHover.css'

function MapHover(){

  return (
    <div className="container">
      <div className="many_buttonClick">
        <h5>./practice_map_hover/MapHover</h5>
        <h3>번호버튼에 마우스를 올렸을 때 뒤의 태그가 hover 될 수 있는 버튼</h3>
        <div className="hover_button_container">
          <div className="hover_button">
            <span className="hover_num">1</span>
            <span className="hover_circle"></span>
          </div>
          <div className="hover_button">
            <span className="hover_num">2</span>
            <span className="hover_circle"></span>
          </div>
          <div className="hover_button">
            <span className="hover_num">3</span>
            <span className="hover_circle"></span>
          </div> 
          <div className="hover_button">
            <span className="hover_num">4</span>
            <span className="hover_circle"></span>
          </div>  
          <div className="hover_button">
            <span className="hover_num">5</span>
            <span className="hover_circle"></span>
          </div>        
        </div>
      </div>
    </div>
  );
}

export default MapHover