import "../STYLE/promotion.css";
function Promotion(props) {
  return (
    <div className="outterWrapper">
      <div className="leftGroup"> </div>
      <div className="rightGroup">
        <div className="rightGroupWrapper">
          <h1 className="title1">{props.title1}</h1>
          <img className="fruit" alt="" src={props.fruit1}></img>
          <img className="bottle" alt="promotion" src={ props.bottle}></img>
          <h1 className="title2">{props.title2}</h1>
          <img className="fruit2" alt="" src={props.fruit2}></img>
        </div>
      </div>
    </div>
  );
}
export default Promotion;
