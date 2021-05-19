import logo from './logo.svg';
import './_base.scss';
import Header from "./Layout/Header/Header";
import Hero from "./sections/hero/hero";
import NavBlocks from "./sections/navBlocks/navBlocks";
import NewToDucs from "./sections/newDucs/newDucs";

function App() {
  return (
    <div className="base">
      <Header/>
      <Hero/>
      <NavBlocks/>
      <NewToDucs/>
    </div>
  );
}

export default App;
