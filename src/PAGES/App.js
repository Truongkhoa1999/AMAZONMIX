import { PromotionData } from "../data/PromotionData";
import ParallelogramButton from "../KOMPONENT/ParallelogramButton";
import Promotion from "../KOMPONENT/Promotion";
import "../STYLE/App.css";

function App() {
  return (
    <div className="outerWrapper">
      <div className="leftWrapper">
        <div className="header">AMAZON MIX</div>
        <div className="main">
          {PromotionData.map((item) => (
            <Promotion
              bottle={item.bottle}
              title1={item.title1}
              title2={item.title2}
              fruit1 = {item.fruit1}
              fruit2 = {item.fruit2}

            />
          ))}
        </div>
        <div className="pagination">pagination</div>
      </div>
      <div className="rightWrapper">
        <div className="upperWrapper">
          <img src="https://tinyurl.com/2ghuyn56" alt="" className="image"></img>
          <h2>SHOPPING FRESH SMOOTHIES</h2>
          <ParallelogramButton />
        </div>
        <div className="belowWrapper">
        <h2>SHOPPING FRESH SMOOTHIES</h2>
          <ParallelogramButton />
        </div>
      </div>
    </div>
  );
}

export default App;
