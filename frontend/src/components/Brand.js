import "./style/Brands.css";
import logo1 from "./media/brand_logos/logo1.png";
import logo2 from "./media/brand_logos/logo2.png";
import logo3 from "./media/brand_logos/logo3.jpg";
import logo4 from "./media/brand_logos/logo4.jpg";
import logo5 from "./media/brand_logos/logo5.jpg";
import logo6 from "./media/brand_logos/logo6.jpg";
import logo7 from "./media/brand_logos/logo7.jpg";
import logo8 from "./media/brand_logos/logo8.jpg";
import logo9 from "./media/brand_logos/logo9.jpg";
import logo10 from "./media/brand_logos/logo10.jpg";
import logo11 from "./media/brand_logos/logo11.jpg";
import logo12 from "./media/brand_logos/logo12.jpg";

function Brands() {
    const white_logo = {
        background: "#e4e4e4",
    };
  return (
    <div className="brands-tab">
      <h1>
        popular <span>brands</span>
      </h1>
      <section>
        <div className="logo">
          <img src={logo1} alt="" />
        </div>
        <div className="logo" style={white_logo}>
          <img src={logo2} alt="" />
        </div>
        <div className="logo">
          <img src={logo3} alt="" />
        </div>
        <div className="logo">
          <img src={logo4} alt="" />
        </div>
        <div className="logo">
          <img src={logo5} alt="" />
        </div>
        <div className="logo">
          <img src={logo6} alt="" />
        </div>
        <div className="logo">
          <img src={logo7} alt="" />
        </div>
        <div className="logo">
          <img src={logo8} alt="" />
        </div>
        <div className="logo">
          <img src={logo9} alt="" />
        </div>
        <div className="logo">
          <img src={logo10} alt="" />
        </div>
        <div className="logo">
          <img src={logo11} alt="" />
        </div>
        <div className="logo">
          <img src={logo12} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Brands;
