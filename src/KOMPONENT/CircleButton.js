import "../STYLE/circleButton.css";
function CircleButton(props) {
  return (
    <div class="center-con">
      <div class="round" onClick={props.onClick}>
        <div id="cta">
          <span class="arrow primera next "></span>
          <span class="arrow segunda next "></span>
        </div>
      </div>
    </div>
  );
}

export default CircleButton;
