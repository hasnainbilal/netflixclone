import React, {useState, useEffect} from 'react';
import "../Nav.css";

function Nav() {
    const [show, handShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handShow(true);
            }
            else handShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav_black"} `}>
            <img
                className="nav_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            
            <img
                className="nav_avatar" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/320px-Netflix_2015_N_logo.svg.png"
                alt="Netflix Avatar"
            />
        </div>
    )
}

export default Nav;
