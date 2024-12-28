import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px', height: "100vh"  }}>
      <p>Apple Watch Studio</p>
      <h1>Choose a case.<br/>
         Pick a band. <br/>
         Create your own style.
      </h1>
      <Link to="/customize">
        <button style={{ display:"flex", alignItems: "center", justifyContent: "center",textAlign:"center", padding: '10px 20px', fontSize: '14px' , borderRadius: "20px", border: 'none', backgroundColor: "blue", color: "#fff"}}>Get started</button>
      </Link>
      <img src="/apple/apple1.jpeg" alt="apple" width="350" height="250"/>
    </div>
  );
};

export default LandingPage;
