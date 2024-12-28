import React from 'react';

const Header = () => (
  <header style={{ padding: '10px', backgroundColor: '#fff', }}>
    <div>
      <div style={{display: "flex"}}>
        <img src="/apple/logo.png" alt="apple-logo" style={{height: "40px", width: "40px", padding:"20px"}}/>
        <h4 style={{fontFamily: "serif", fontSize: "20px"}}>WATCH</h4>
        <button style={{marginLeft: "800px", height:"30px", borderRadius: "10px",width:"50px", backgroundColor: "blue", color:"#fff", border:"none"}}>save</button>
      </div>
   </div>
  </header>
);

export default Header;
