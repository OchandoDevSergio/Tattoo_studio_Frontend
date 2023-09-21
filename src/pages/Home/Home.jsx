import './Home.css'
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => {

    return (
      <div className="home">      
        <Carousel>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/tcWCVHt/estudio-0.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/CwqJwKK/estudio-1.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/Rg0Qg4z/estudio-6.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/yhVdnwN/estudio-8.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/sHmCxsM/estudio-4.jpg"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImg" src="https://i.ibb.co/CPWw4yn/logo-2.jpg"/>
          </Carousel.Item>
        </Carousel> 
      </div>

      
    )
}