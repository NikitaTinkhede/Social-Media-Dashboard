import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DemoSlider = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner" style={{opacity:'inherit',width:'100%',height:"200px",objectFit:"cover"} }>
    <div className="carousel-item active">
      <img src='./assests/box2_image.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='./assests/box5_image.jpg' className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src='./assests/social3.jpg' className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </button>
</div>
    </div>
  )
}

export default DemoSlider
