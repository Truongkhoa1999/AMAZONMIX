
import '../STYLE/circleButtonL.css'
function CircleButtonL(props) {
    return (
      <div class="center-con">
        <div class="round1" onClick={props.onClick}>
          <div id="cta">
            <span class="arrow primera next "></span>
            <span class="arrow segunda next "></span>
          </div>
        </div>
      </div>
    );
  }
  
  export default CircleButtonL;