import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const About = () => {
  return (
    <div style={{padding:"10px"}}>
        <div style={{padding:"10px",background:"cornsilk",boxShadow:"5px 5px 5px 5px grey",borderRadius:"5px"}}>
        <img src='./harrison.jpg' data-aos="zoom-in" style={{width:"100%"}}/>

        </div><br/><br/>
        <h1 style={{textAlign:"center",fontSize:"100px",fontWeight:"bold", border:"10px"}}>About us</h1>
         <p data-aos="zoom-out" style={{ color: "black",textAlign:"justify" }}>
        Hotel Harrison Palace, has a distinctively  sleek  contemporary architectural design contrasting with the rich essence of Biratnagar. The hotel is four star categorized boutique designed luxury  hotel that has the efficiency to cater to full satisfaction to their  guests. Featuring  50 spacious rooms & suites inside this hotel located at heart of  Biratnagar provides business and leisure travellers with the perfect home base from which to explore “Industrial and Business city” and beyond. The hotel is established  with a vision to be the preferred group of hotels for the discerning global traveller. The hotel  Harrison Palace is in the hospitality business to provide superior service. Hotel Harrison Palace is committed to offer quality accommodation and services to our guests. We strive to achieve Excellence in Service and Standards
        </p>

        <h1 style={{textAlign:"center",fontWeight:"bold"}}>Contact Us</h1>
       <div style={{display:"flex",justifyContent:"space-around"}}>
       <div>
       <div style={{display:"flex",justifyItems:"center",gap:"10px"}}>
        <IoLocationSharp style={{fontSize:"20px"}}/>
        <p>Campus Road, Roadcess, Biratnagar</p>
        </div>

        <div style={{display:"flex",justifyItems:"center",gap:"10px"}}>
        <FaPhoneAlt style={{fontSize:"20px"}}/>
        <p>9800123456, 9812345678</p>
        </div>

        <div style={{display:"flex",justifyItems:"center",gap:"10px"}}>
        <SiGmail style={{fontSize:"20px"}}/>
        <p>mahendra@gmail.com</p>
        </div>
       </div>

        <div style={{display:"flex",gap:"20px",fontSize:"20px"}}>
        <a href='https://www.facebook.com/'><FaFacebook style={{cursor:"pointer"}}/></a>
        <a href='https://twitter.com/'><FaSquareXTwitter style={{cursor:"pointer"}}/></a>
        <a href="https://instagram.com"><FaInstagram style={{cursor:"pointer"}}/></a>
        </div>
       </div>
    
    </div>  
  )
}

export default About