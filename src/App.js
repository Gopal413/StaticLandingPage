//import logo from './logo.svg';
import './App.css';
import Card2 from './Components/Card2';
import Cards from './Components/Cards';
import LandingFooter from './Components/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
     <Header/>
     <div className='app2'>
     <Home/>
     <Cards/>
     <Card2/>
     <Hero/>
     <LandingFooter/>
     </div>
    </div>
  );
}

export default App;
