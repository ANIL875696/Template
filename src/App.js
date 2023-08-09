
import './App.css';
import Header from './component/Header';
import Nav from './component/Nav'
import Hero from './component/Hero'
// import Routing from "./component/Routing"
import Sliders from './component/Sliders';
import Portfolio from "./component/Portfolio"
import Blogs from "./component/Blogs"
import Service from "./component/Service"
import Footer from "./component/Footer"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Hero/>
      {/* <Routing/> */}
      <Sliders/>
      <Portfolio/>
      <Blogs/>
      <Service/>
      <Footer/>
      

    </div>
  );
}

export default App;
