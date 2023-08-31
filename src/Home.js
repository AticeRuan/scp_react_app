import React from 'react'
import hero from './background.jpg';
import './styles.css'



const Home = () => {
  return (
    <div>
      {/* <img  src={hero} alt="..." className="rounded img-fluid mx-auto " style={{ width: '100vw', height: 'auto' }} /> */}
      <div className="jumbotron"  style={{ backgroundImage: `url(${hero})`,backgroundSize:'cover',height:'90vh' }}>
      <div className="display-4 " style={{ color:'#f8f9fa',paddingTop:'30vh',fontSize:'6em'}}>SCP FOUNDATION</div>
      <div className="lead" style={{ color:'#f8f9fa',fontSize:'2rem'}}>Use top menu to open files</div>
      </div>
    </div>
  )
}

export default Home
