import logo from './logo.svg';
import './App.css';

import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function App() {
  return (
    <div className="App">
      <OwlCarousel 
        items="1"
        nav
        dots
        autoplay
      >
        <div className="item">
          1
        </div>
        <div className="item">
          2
        </div>
        <div className="item">
          3
        </div>
      </OwlCarousel>
    </div>
  );
}

export default App;
