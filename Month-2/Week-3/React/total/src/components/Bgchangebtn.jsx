import React, { useContext} from 'react'
import ThemeContext from './ThemeContext';

function Bgchangebtn() {
    const {bgColor,setBgColor}=useContext(ThemeContext);
    const changeBG=()=>{
        setBgColor((prev)=>
            (prev==='blur(10px)')? prev='blur(2px)' : prev='blur(10px)'
        );
    }
  return (
    <>
    <h1 style={{textAlign:'center'}}>useContext</h1>
    <div className='flex' style={{justifyContent : 'center', height :'200px', alignItems :'center'}}>
        <button className="hrjbtn_l" onClick={changeBG}>Change Blur</button>
    </div>
    </>
  )
}

export default Bgchangebtn