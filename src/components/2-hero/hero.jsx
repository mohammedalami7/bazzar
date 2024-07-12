import "./hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { images } from "../../images";

export default function Hero() {
  return (
  <div className="content">
    <Swiper
        pagination={{dynamicBullets: true,}}
        modules={[Pagination]}
        className="myswiper"
        loop={true}
        >
      
        <SwiperSlide >
          <div className="info">
            <span className="span">lifestyle collection</span>
            <h1>men</h1>
            <h3> sale up to <span>30% off</span></h3>
            <p>get free shipping on orders over $90.00</p>
            <a href="">shop now</a>
          </div>
            <img src={images.banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide >
        <div className="info">
            <span className="span">lifestyle collection</span>
            <h1>women</h1>
            <h3> sale up to <span>35% off</span></h3>
            <p>get free shipping on orders over $99.00</p>
            <a href="">shop now</a>
          </div>
            <img src={images.banner2} alt=""  />
        </SwiperSlide>
    </Swiper>
  
  <div className="boxes">
    <div className="box1">
      <img src={images.banner4} />
      <div className="typographie">
        <span>new arrivals</span>
        <h3>summer <dd/> sale 20% off</h3>
        <a href="" className="icon-arrow-long-right">shop now</a>
      </div>
    </div>
    <div className="box2">
      <img src={images.banner3} />
      <div className="typographie">
        <span>gaming 4k</span>
        <h3>desktops & <dd/> laptops</h3>
        <a href="" className="icon-arrow-long-right">shop now</a>
      </div>
    </div>
  </div>
    </div>
  )
}