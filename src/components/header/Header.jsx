import React from 'react'
import '../header/header.css'
import { useState, useEffect } from 'react'

function Header() {
  const [fixheader, setFixheader] = useState('');
  const [top, setTop] = useState('0px')
  

  useEffect(() => {
    const windowscroll = () => {
      if (window.scrollY > 200) {
        setFixheader("fixed");
        setTop("0px");
      } else if (window.scrollY > 100) {
        setFixheader("fixed");
        setTop("-100px");
      } else {
        setFixheader("relative");
        setTop("0px");
      }
    };
    window.addEventListener('scroll', windowscroll);
    return () => {
      window.removeEventListener('scroll', windowscroll);
    };
  }, []);
  return (
    <>

      <nav className=' navbar navbar-expand-lg bg-black' style={{position:`${fixheader}`,top:`${top}`}} >
        <div className="kkk"></div>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={require('../../image/manjeet2.png')} alt="" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler"><img style={{ width: '40px', height: '40px' }} src={require('../../image/menu.png')} alt="" /></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto pe-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Project</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav >
    </>
  )
}

export default Header
