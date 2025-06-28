import React from "react";
import { Link } from "react-router-dom";
import icon_lknd from "../components/IMGS/icon_lknd.png"
import y1 from "../components/IMGS/y121.jpg"
import github_icon from "../components/IMGS/github_icon.png"
import mern_logo from "../components/IMGS/mern_logo.png"

const Home=()=>{

    return(

        <div id="Home" className="home_main_cnt">
            <div className="home_txt_cnt">
                <p>
                    Hi <br />
                    I'am Yug <br />
                    Mern Stack <img  className="mern_home" src={mern_logo} alt="LOGO" />   <br />
                    Developer
                </p>
                <button className="home_btn_contact_cnt" >{<Link className="link" to="/#Contact">Contact</Link>}</button>
            </div>
           
            <div className="home_2_pic_main_cnt">
                <button className="home_btn_Linkedin_cnt" >{<Link className="link" to="https://www.linkedin.com/in/yug-sudani-6a5a58297"><img className="icon_linkedin" src={icon_lknd} alt="" /></Link>}</button>
                <button className="home_btn_Github_cnt" >{<Link className="link" to="https://github.com/YugSudani"><img className="icon_github" src={github_icon} alt="" /></Link>}</button>
                <img className="home_pic" src={y1} alt="" />
            </div>

        </div>
        
    )
}

export default Home;