import React from 'react';
import '../practice_map_button/MapManyButtonClick.css'
import './AnimationScale.css'

function AnimationScale(){
  return (
    <div className="container">
      <div className="many_buttonClick">
        <h5>./animation/AnimationScale</h5>
        <h3>애니메이션 스케일</h3>
        <div className="animation_button_container">

          <div className="animation_button">
            <span className="animation_num_left">1</span>
            <span className="animation_circle_left"></span>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default AnimationScale