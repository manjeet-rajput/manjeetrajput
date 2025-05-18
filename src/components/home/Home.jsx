import React from 'react'
import '../home/home.css'

function Home() {
  return (
    <>
      <div className="row homeSection">
          <div className="details col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className="detail">
            <h4>HELLO !</h4>
            <h1><span style={{color:'white'}}>i'm</span>  Manjeet <br/> Singh</h1>
            <marquee direction=''><h2>Web Designer</h2></marquee>
            <h3>A React Js Developer</h3>
            <div className="buttons">
            <button className='btn btn-warning'>About</button>
            <button className='btn btn2'>Resume</button>
            </div>
            </div>
          </div>
          <div className="image col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <img src={require('../../image/whiteshirt.png')} alt="manjeet rajput" />
          </div>
      </div>
    </>
  )
}

export default Home
