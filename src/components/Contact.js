import React,{useState,useEffect} from "react"
import Footer from "./Footer" 
import ProjectCards from "./Projects/ProjectCards";

import { Container, Row } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import Axios from 'axios'

function Contact(){
    return(
        <Container fluid className="about-section">
           

           <div>CONTACT ME 👨‍💻📲</div>
        
           
           <div id="contact">
               <br></br>
               <br></br>
               <br></br>
               <div>linkedinn : <a href="https://www.linkedin.com/in/sharan-m-b896211a3/">Linkedinn</a></div>
               <br></br>
               <br></br>
               <div>Github : <a href="https://github.com/sharan96632">Github </a></div>
               <br></br>
               <br></br>
               Email : <p id="email">sharanm766@gmail.com</p>
               <br></br>
               <br></br>
               <div>Instagram  : <a href="https://www.instagram.com/imsharan_434/">Instagram</a></div>
               </div>
       
               
       
                
        
              
        </Container>
   
    )
}
export default Contact;