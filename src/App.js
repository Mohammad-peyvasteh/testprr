import AllItems from "./components/UI/AllItems";
import Baner from "./components/UI/Baner";
import CategotyItems from "./components/UI/CategotyItems";
import HeroSlider from "./components/UI/HeroSlider";
import Image from "./components/UI/Image";
import Logo from "./components/UI/Logo";
import Navbar from "./components/UI/Navbar";
import NewColection from "./components/UI/NewColection";
import OffColection from "./components/UI/OffColection";
import Popular from "./components/UI/Popular";
import Footer from "./components/UI/Footer";

import './app.css'
function App() {
  return (
    
    <div> 
     
     <Navbar/>
     
     <HeroSlider/>   

     
     <CategotyItems/>
     <OffColection/>
     <NewColection/>
     <Image/>
     <AllItems/>
     <Popular/>
     <Logo/>
     <Baner/>
     <Footer/>
     
     
    </div>
  );
}

export default App;
