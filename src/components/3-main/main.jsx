import './main.css'
import { product } from '../../data'
import  { useContext, useState } from 'react'
import ProductInfo from './productInfo';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { CartContext } from '../1-Header/carpovider';

const Main = () => {

    const [arr, setArr] = useState(product);
    const [produ, setProdu] = useState(null);
    const { addToCart } = useContext(CartContext);

    const filtring = (category) => {
        const Newproduct = product.filter(el => el.ProductCategory === category);
        setArr(Newproduct);
    }

    const Both = () => {
        setArr(product);
    }



    const products = arr.map((pro) => {

    const handleProductClick = () => {
        addToCart({
            title: pro.producTitle,
            price: pro.ProductPrice,
            rate: pro.ProductRating,
            im1: pro.ProductImg.img1,
        });
    };

        const hiding = () => {
            setProdu(pro.producTitle)
        }
   
        return (
            <div className="card" key={pro.id}>
                {produ === pro.producTitle &&
                    <ProductInfo
                        remove={() => setProdu(null)}
                        title={pro.producTitle}
                        price={pro.ProductPrice}
                        rating={pro.ProductRating}
                        description={pro.ProductDescription}
                        category={pro.ProductCategory}
                        image1={pro.ProductImg.img1}
                        image2={pro.ProductImg.img2}
                    />
                }
                <Swiper
                    pagination={{ dynamicBullets: true }}
                    modules={[Pagination]}
                    className="ourswiper"
                    loop={true}
                >
                    <SwiperSlide>
                        <img src={pro.ProductImg.img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={pro.ProductImg.img2} alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className='information'>
                    <span className='first'>
                        <span>{pro.producTitle}</span>
                        <span>${pro.ProductPrice}</span>
                    </span>
                    <p>{pro.ProductDescription}</p>
                    <div>
                        <span>
                            {Array.from({ length: pro.ProductRating }).map((_, i) => (
                                <span className='icon-star' key={i} />
                            ))}
                        </span>
                        <button type="button" onClick={() => { hiding(); handleProductClick(pro); }}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className='products'>
            <div className="up">
                <div className="info">
                    <h4>selected products</h4>
                    <p>all our new arrivals in an exclusive brand selection</p>
                </div>
                <div className='ull'>
                    <span onClick={Both}>all products</span>
                    <span onClick={() => filtring('men')}>men category</span>
                    <span onClick={() => filtring('women')}>women category</span>
                </div>
            </div>
            <div className="down">
                {products}
            </div>
        </div>
    );
}

export default Main;
