import { Link } from "react-router-dom";
import React from "react";

const Header=()=>{


    return(
        <div id="Header" className="header_main_container"  >
                <div className="header_1_cnt">
                    <p className="header_name">YUG</p>
                </div>

                <div className="header_2_cnt">
                    <Link className="link" to="/#Home">Home</Link>
                    <Link className="link" to="/#About">About</Link>
                    <Link className="link" to="/#Skill">Skill</Link>
                    <Link className="link" to="/#Work">Work</Link>
                    <Link className="link" to="/#Contact">Contact</Link>
                </div>
                
        </div>
    )
}


export default Header;