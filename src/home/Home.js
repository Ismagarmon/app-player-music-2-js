// import logo from '../logo.svg';
import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './PageHomeStyle.css'

const Sizes = {
  Desktop: 844,
  Ipad: 430
}

function Home() {

  const [isDesktop, setIsDesktop] = useState(true)

  const [isPhone, setIsPhone] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [rout, setRout] = useState('home')

  useEffect(() => {
   
    if (localStorage.getItem('zone') == null) {
        localStorage.setItem('zone', 'home')
    }

    setRout(localStorage.getItem('zone'))

    getSizes()

    window.addEventListener('resize', getSizes)
    console.log("ASD")
    return () => {
        window.removeEventListener('resize', getSizes)
    }

  }, [])

  const getSizes = () => {
    console.log("ASD")
    if (document.body.clientWidth >= Sizes.Desktop) {
      setIsDesktop(true)

      setIsPhone(false)
    } else if (document.body.clientWidth >= Sizes.Ipad) {
      setIsDesktop(false)

      setIsPhone(false)
    } else {
      setIsDesktop(false)

      setIsPhone(true)
    }

  }

  const changerout = (rute) => {
    localStorage.setItem('zone', rute)
    setRout(rute)
    if (isOpened) {
      setIsOpened(false)
    }
    
  }
  
  return (
    <>
    <nav className={`flex flex-at flex-jc ${isPhone ? '' : 'g'} ${rout.includes('home') ? '' : 'nav-c'}`}>
        
            <div className="ctn1 flex flex-jcsb m-w">
                <Link
                    to={"/pp/home"}
                    id="home"
                    onClick={() => changerout('home')}
                    className={`${rout.includes('home') ? 'fw' : ''} ${rout.includes('home') ? '' : 'a-c'}`}
                >
                    Home
                </Link>

                <Link
                    to={"/pp/about"}
                    id="about"
                    onClick={() => changerout('about')}
                    className={`${rout.includes('about') ? 'fw' : ''} ${rout.includes('home') ? '' : 'a-c'}`}
                >
                    About Us
                </Link>
            </div>
        

        <div className="ctn2 flex flex-at flex-jc gap-l m-w">
            <img alt="appicon" src="../assets/img/ASD_F.png" id="appicon" />
            <p className={`prueba ${rout.includes('home') ? 'ob' : ''}`}>BEAT WAVES</p>
        </div>

        
            <div className="ctn3 flex flex-at flex-jc m-w">
                
                    <button className="btn flex flex-at">
                        <Link to = {'/pp/signin'} id="signin" onClick={() => changerout('signin')}>SignIn</Link>
                    </button>
                
                
                    <button className="btn flex flex-at">
                        <Link to={"/pp/signup"} id="signup" onClick={() => changerout('signup')}>SignUp</Link>
                    </button>
        
            </div>
        
    </nav>
    <div className="spacer"></div>
    </>
  );
}

export default Home;