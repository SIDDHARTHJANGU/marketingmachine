import "./App.css";
import Featured from "./Components/Featured";
import Myheader from "./Components/Myheader";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SatisfiedClients from "./Components/SatisfiedClients";
import { Digital } from "./Components/Digital";
import MarketingPlan from "./Components/MarketingPlan";
import ActualBusinesses from "./Components/ActualBusinesses";
import TheGrowth from "./Components/TheGrowth";
import LearnFrom from "./Components/LearnFrom";
import Ready from "./Components/Ready";
import Myfooter from "./Components/Myfooter";
import BackToTop from "./Components/BackToTop";

function App() {
  return (
    <div className=" overflow-hidden">
      <BackToTop />
      <Myheader />
      <Featured />
      <SatisfiedClients />
      <Digital />
      <MarketingPlan />
      <TheGrowth />
      <ActualBusinesses />
      <LearnFrom />
      <Ready />
      <Myfooter />
    </div>
  );
}

export default App;
