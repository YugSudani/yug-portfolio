import React from "react";
import icon_lknd from "../components/IMGS/icon_lknd.png"
import github_icon from "../components/IMGS/github_icon.png"
import { Link } from "react-router-dom";
import mern_logo from "../components/IMGS/mern_logo.png"
const Footer=()=>{

    return(
        <>
        <div className="footer_contact">
                <p>Email : yugsudani88@gmail.com</p>
                <p>Contact : 9510502422</p>
        </div>
        <div id="F" className="Footer_container">
                <h3>. Yug . S .</h3>
                <img  className="mern_footer" src={mern_logo} alt="LOGO" />
                <Link className="Back_to_top" to="/#Header"><p>Back To Top</p></Link>
                <button className="home_btn_Linkedin_cnt" >{<Link className="link" to="https://www.linkedin.com/in/yug-sudani-6a5a58297"><img className="icon_linkedin" src={icon_lknd} alt="" /></Link>}</button>
                <button className="home_btn_Github_cnt" >{<a className="link" href="https://github.com/YugSudani"><img className="icon_github" src={github_icon} alt="" /></a>}</button>
                <h5>All Rights reserved 2025</h5>
                
        </div>
        </>
    )
}


export default Footer;
