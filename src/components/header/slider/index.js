import Item from './item'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import './style.scss';

function Slider() {

  let content = [
    {
      id: 0,
      img: 'https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/best-laptops-for-working-from-home-hero1570812274803636.jpg',
      title: 'We Do Software Development 0',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    },
    {
      id: 1,
      img: '../../../../public/img/slidshow.png',
      title: 'We Do Software Development 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    },
    {
      id: 2,
      img: '../../../../public/img/slidshow.png',
      title: 'We Do Software Development 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    },
    {
      id: 3,
      img: '../../../../public/img/slidshow.png',
      title: 'We Do Software Development 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.',
    }
  ]

  return (
    <>
      <OwlCarousel className="slider"
      items="1"
      autoplay
      loop
      >
        {
          content.map(item =>
            <Item 
              key={item.id} 
              img={item.img}
              name={item.title}
              desc={item.desc}/>
          )
        }
      </OwlCarousel>
    </>
  );
}
  
  export default Slider;
  