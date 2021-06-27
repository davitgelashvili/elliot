import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function Slider() {
    return (
        <OwlCarousel className="slider"
          items="1"
          nav
          dots
          autoplay
        >
          <div className="slider__item">
            1
          </div>
          <div className="slider__item">
            2
          </div>
          <div className="slider__item">
            3
          </div>
        </OwlCarousel>
    );
  }
  
  export default Slider;
  