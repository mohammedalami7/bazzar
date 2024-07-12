/* eslint-disable react/prop-types */

// import React from "react";

export default function ProductInfo({title,price,rating,category,description,image1,remove}) {

   
    return (
      <div className="one">
      <img src={image1} alt="" />
    
       <span className="icon-close" onClick={remove}/>
       <div className="two">
        <h1>{title}</h1>
        <span>category: {category}</span>
        <h1>${price}</h1>
        <div>
             {Array.from({length: rating}).map((_,i)=>{
                return <span className="icon-star" key={i}/>
             })
             }
        </div>
        <p>{description}</p>
       </div>
      </div>
    );
  }
