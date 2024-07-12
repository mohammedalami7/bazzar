
import './footer.css'
export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
          <img src="./bazaar-black-sm.svg" alt="" />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
        </div>
        <div className="footer-center">
          <div className="customer-care">
            <h3>Customer Care</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Track Your Order</a></li>
              <li><a href="#">Corporate & Bulk Purchasing</a></li>
              <li><a href="#">Returns & Refunds</a></li>
            </ul>
          </div>
          <div className="about-us">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Our Stores</a></li>
              <li><a href="#">Our Cares</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: uilib.help@gmail.com</p>
          <p>Phone: +1 1123 456 780</p>
          <div className="social-icons">
            <a href="#" className='icon-facebook-square'>Facebook</a>
            <a href="#" className='icon-x'>Twitter</a>
            <a href="#" className='icon-instagram1'>Instagram</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}


