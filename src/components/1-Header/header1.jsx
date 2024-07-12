import { useTranslation } from 'react-i18next';
import React from 'react'
import './headers.css'

export default  function Header1() {
  

  const {  i18n } = useTranslation('global');
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [menu,setMenu]=React.useState(true)
  function ChangeMenu(){
   setMenu(!menu)
  }
  
  function click() {
    const detailsElement = document.querySelector('.det');
    if (detailsElement) { detailsElement.open = false;}
  }
 
  return (
    <div className='head1'>
        <div className="left">
            <span>hot</span>
            <p>Free Express Shipping</p>
        </div>
        <div className="menu">
       {menu&& <span onClick={ChangeMenu} className='icon-menu' id='menu'/>}
        {!menu&& <span onClick={ChangeMenu} className='icon-close' id='menu'/>}
          </div> 
       {!menu &&
         <div className='right' >
         <details className='det'>
             <summary>lang</summary>
             <li onClick={() => { click(); handleChangeLanguage('en'); }}>en</li>
             <li onClick={() => { click(); handleChangeLanguage('ar'); }}>ar</li>
         </details>
         <span className='icons'>
           <span className='icon-instagram1'/>
           <span className='icon-facebook-square'/>
           <span className='icon-x'/>
         </span>
         </div> 
       } 
          <div className='right' >
         <details className='det'>
             <summary>lang</summary>
                 <li onClick={click}>en</li>
                 <li onClick={click}>ar</li>
         </details>
         <span className='icons'>
           <span className='icon-instagram1'/>
           <span className='icon-facebook-square'/>
           <span className='icon-x'/>
         </span>
         </div> 
    </div>
  )
}

