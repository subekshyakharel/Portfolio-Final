import React from 'react'
import './about.css'
import { Container } from 'react-bootstrap'
import cartoon from '../assets/cartoon.png'
const About = ({brightNess}) => {
  return (
    <Container>
    <div className="container-sec  " style={{color:brightNess ? 'black':'white'}} id="about">
    <div className="about  d-flex justify-content-between align-items-center  gap-5 py-5 my-5" >
        <div className="about-img ">
            <img src={cartoon} alt=""/>
           
        </div>
        <div className="about-content shadow-lg  rounded p-3">
            <h2>about me</h2>
            <h4>A Dedicated Full-Stack Developer</h4>
<p>My name is Subekshya Kharel, and I am a Full-Stack developer currently pursuing a Bachelor of Science in Computer Science and Information Technology, with an expected graduation in 2028.</p>
<p>I am passionate about designing engaging and user-focused digital experiences, blending creativity and technology to deliver impactful solutions.</p>

        </div>
    </div>
</div>
</Container>
  )
}

export default About