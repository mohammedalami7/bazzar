import React, {  } from 'react'
import './headers.css'
import { motion } from 'framer-motion';
import Cart from './cart';
export default function Header2() {
  const [menu,Setmenu]=React.useState(false)
  const [menu2,Setmenu2]=React.useState(false)
  const [menu3,Setmenu3]=React.useState(false)
  const [menu4,Setmenu4]=React.useState(false)
   function switching(){
    Setmenu(!menu)
  }
  function switching2(){
    Setmenu2(!menu2)
  }
  function switching3(){
    Setmenu3(!menu3)
  }
  function switching4(){
    Setmenu4(!menu4)
  }
   /////////
  const [list,SetList]=React.useState(null)

   
  // ////
   
    const [expendFather, SetFather] =React.useState(null);
    const [close,setClose]=React.useState(false)
    

    const handFather = (index) => {
      SetFather(expendFather === index ? null : index);
    };

    function closing(){setClose(!close)}
  return (
    <div className='head2' >
      {close &&
        <Cart
        closing={closing}
        />
      }
      <div className="sectionTopLeft">
        <img src="./bazaar-black-sm.svg" alt="" />
        <div className="shearch">
          <span className='icon-search' onClick={switching4}/>
          <input type="search" name="" id="inputS"  placeholder='searching for ...'/>
          {menu4 &&
            <motion.div className="searching"
            initial={{ opacity: 0, y: -1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <span className='icon-close'onClick={switching4}></span>
            <div>
            <span className='icon-search'/>
          <input type="search" name="" id="jj"  placeholder='searching for ...'/>
          <span>search</span>
            </div>
          </motion.div>
          }

          <menu>
            <p  onClick={switching} className='icon-chevron-thin-down'>all categories</p>
          {menu&& 
              <motion.ul onClick={switching} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
              <li >all categories</li>
              <li>car</li>
              <li>clothes</li>
              <li>electronics</li>
              <li>laptop</li>
              <li>desktop</li>
              <li>camera</li>
              <li>toys</li>
            </motion.ul>
          }
          </menu>
        </div>
        <div className="personne">
          <div className="user">
            <span className='icon-user-circle-o'/>
          </div>
          <div className="shop">
            <span className='icon-cart' id='cartt' onClick={closing} style={{cursor:'pointer',
            }}/>
          </div>
        </div>
      </div>
      <div className="sectionDownRight">
        <div className="categories" onClick={switching2}>
         <div>
            <span className='icon-menu1'>categories</span>
            <span className='icon-chevron-right'/>
         </div>
        {menu2 &&
           <motion.ul onClick={switching2} 
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           >
           <li> <span className='icon-t-shirt'/> fashion</li>
           <li> <span className='icon-laptop'/> electronics</li>
           <li> <span className='icon-pedal_bike'/> bikes</li>
           <li> <span className='icon-tree'/> home & garden</li>
           <li> <span className='icon-gift'/> Gifts</li>
           <li> <span className='icon-microphone'/> music</li>
           <li> <span className='icon-health'/> health & beauty</li>
           <li> <span className='icon-pets'/> pets</li>
           <li> <span className='icon-child_care'/> baby toys</li>
           <li> <span className='icon-basket'/> groceries</li>
           <li> <span className='icon-directions_car'/> automotive</li>
          </motion.ul>
        }
        </div>
        <div className="classes">
          <span className='icon-menu' id='iconM' onClick={switching3}/>
          <ul className='grandfather1'>
           <li id='father' className='icon-chevron-small-down' onClick={() => SetList(list==='home'?null:'home')} >home
            
                {list==='home'&& 
              <ul>
                <li>market</li>
                <li>gadget</li>
                <li>grocery</li>
                <li>fashion</li>
                <li>furniture</li>
                <li>medical</li>
                <li>gift store</li>
                <li>health and beauty</li>
              </ul>
            }
            
           </li>
           <li id='father' className='icon-chevron-small-down' onClick={() => SetList(list==='mega-menu'?null:'mega-menu')} >mega menu
            {list==='mega-menu'&&
                <ul>
                <li>vendor account</li>
                <li>products</li>
                <li>orders</li>
                <li>login</li>
                <li>register</li>
              </ul>
            }
           </li>
           <li id='father' className='icon-chevron-small-down' onClick={() => SetList(list==='full-screen'?null:'full-screen')}>full screen menu
            {list==='full-screen'&&
                <ul>
                <li>fashion</li>
                <li>electronics</li>
                <li>sports and outdoors</li>
                <li>books </li>
                <li>software</li>
                <li>toys and games</li>
              </ul>
            }
           </li>
           <li id='father' className='icon-chevron-small-down' onClick={() => SetList(list==='pages'?null:'pages')}>pages
             {list==='pages'&&
              <ul>
              <li>sale page</li>
              <li>vendor</li>
              <li>shop</li>
              <li>autentication</li>
            </ul>
             }
           </li>
           <li id='father' className='icon-chevron-small-down' onClick={() => SetList(list==='user-account'?null:'user-account')}>user account
              {list==='user-account'&&
                <ul>
                <li>orders</li>
                <li>profile</li>
                <li>address</li>
                <li>support tickets</li>
                <li>wishlist</li>
              </ul>
              }
           </li>
         </ul>
          {menu3 &&
         <div className='grandfather2'>
        <motion.ul className='grandfather22'
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li className='icon-close' id='span' onClick={switching3} />
        <li id='father' className='icon-chevron-small-down' onClick={() => handFather(0)}>
          home
          <ul style={{ display: expendFather === 0 ? 'flex' : 'none' }}>
            <li>market</li>
            <li>gadget</li>
            <li>grocery</li>
            <li>fashion</li>
            <li>furniture</li>
            <li>medical</li>
            <li>gift store</li>
            <li>health and beauty</li>
          </ul>
        </li>
        <li id='father' className='icon-chevron-small-down' onClick={() => handFather(1)}>
          mega menu
          <ul style={{ display: expendFather === 1 ? 'flex' : 'none' }}>
            <li>vendor account</li>
            <li>products</li>
            <li>orders</li>
            <li>login</li>
            <li>register</li>
          </ul>
        </li>
        <li id='father' className='icon-chevron-small-down' onClick={() => handFather(2)}>
          full screen menu
          <ul style={{ display: expendFather === 2 ? 'flex' : 'none' }}>
            <li>fashion</li>
            <li>electronics</li>
            <li>sports and outdoors</li>
            <li>books</li>
            <li>software</li>
            <li>toys and games</li>
          </ul>
        </li>
        <li id='father' className='icon-chevron-small-down' onClick={() => handFather(3)}>
          pages
          <ul style={{ display: expendFather === 3 ? 'flex' : 'none' }}>
            <li>sale page</li>
            <li>vendor</li>
            <li>shop</li>
            <li>autentication</li>
          </ul>
        </li>
        <li id='father' className='icon-chevron-small-down' onClick={() => handFather(4)}>
          user account
          <ul style={{ display: expendFather === 4 ? 'flex' : 'none' }}>
            <li>orders</li>
            <li>profile</li>
            <li>address</li>
            <li>support tickets</li>
            <li>wishlist</li>
          </ul>
        </li>
      </motion.ul>
      </div >
}
        </div>
      </div>
    </div>
  )
}



