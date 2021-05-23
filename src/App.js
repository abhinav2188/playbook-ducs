import './_base.scss';
import Header from "./Layout/Header/Header";
import Hero from "./sections/hero/hero";
import NavBlocks from "./sections/navBlocks/navBlocks";
import NewToDucs from "./sections/newDucs/newDucs";
// import Marquee from "./UI/marquee";
import MTT from "./sections/meetTheTeam/meetTheTeam";
import Marquee from "./UI/marquee2"

var slides = [
  <p>slide 1</p>,
  <p>slide 2</p>,
  <p>slide 3</p>,
  <p>slide 4</p>,
  <p>slide 5</p>,
  <p>slide 6</p>,
  // <p>slide 7</p>,
  // <p>slide 8</p>,
  // <p>slide 9</p>,
];

function App() {
  return (
    <div className="base">
      <Header/>
      <Hero/>
      <NavBlocks/>
      <NewToDucs/>
      <Marquee itemsArray={slides} activeItemsCount={3}/>
      <Marquee itemsArray={slides} activeItemsCount={5}/>
      {/* <MTT /> */}
    </div>
  );
}

export default App;
