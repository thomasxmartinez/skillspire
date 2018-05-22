import React from 'react';
import './App.css'


class FollowMe extends React.Component{
  render () {
    let mouseX = 0;
    let mouseY = 0;

    let kittyX = 50;
    let kittyY = 50;

    // window.addEventListener("mousemove", whereIsTheMouse());

    function whereIsTheMouse (e){
      mouseX = e.screenX;
      mouseY = e.screenY;
      moveThatMouse();
    };

    function moveThatMouse () {
      kittyX += (mouseX-kittyX)/3;
      kittyY += (mouseY-kittyY)/3;
    };

    return ("#cat").css({left: kittyX + 'px', top: kittyY + 'px'});
  }

  // ("#moving_div").css({left:$xp +'px', top:$yp +'px'});
  // }, 30)

};




export default FollowMe;
