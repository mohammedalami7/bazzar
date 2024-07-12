
import './cart.css';
import { useContext } from 'react';
import { CartContext } from './carpovider';
import { motion } from 'framer-motion';
// eslint-disable-next-line react/prop-types
const Cart = ({ closing }) => {
    const { cart, removeFromCart } = useContext(CartContext);

    const totalPrice = Math.abs(cart.reduce((total, item) => total + item.price, 0))

    return (
        <motion.div className="cart"
            initial={{ opacity: 0, x:  1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h2 id='h2'>Shopping Cart</h2>
            <span className='icon-close' id='close' onClick={closing} />
            <div className='allpro'>
                {cart.map((item, index) => (
                    <div key={index} className='shoper'>
                        <img src={item.im1} alt="Product" />
                        <div>
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <span>
                                {Array.from({ length: item.rate }).map((_, i) => (
                                    <span className='icon-star' key={i} />
                                ))}
                            </span>
                        </div>
                        <span className='icon-close' onClick={() => removeFromCart(index)} />
                    </div>
                ))}
            </div>
            <a href="#">checkout now (${totalPrice})</a>
        </motion.div>
    );
};

export default Cart;
