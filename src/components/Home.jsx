import React from 'react'


const Home = () => {

  const Background = 'hero.png'
  return (
   <div className="home-container" >
       <div className="hero-section" style={{backgroundImage: `url(${Background})`}}>
        <div className="over"></div>
          <div className="hero-content">
            <h1>ethics & asthetics</h1>
            <p>the aromas house</p>
            <a href="#"><button className='link-btn'>shop</button></a>
          </div>
       </div>
   </div>
  )
}

export default Home