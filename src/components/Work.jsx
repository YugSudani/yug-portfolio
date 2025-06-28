import React from "react";
import { Link } from "react-router-dom";
import work3 from "../components/IMGS/work3.jpg"
import weather from "../components/IMGS/weather.png"
import game1IMG from "../components/IMGS/game1IMG.png"
import ecart from "../components/IMGS/ecart.png"

const Work=()=>{

    return(
        <>
            <p id="Work" className="section_headings">Work</p>
            <div className="work_main_cnt">
                    <a className="work_link" href="https://ecart-vjnr.onrender.com/"><img className="work_img" src={ecart} alt="projects" /></a>
                    <a className="work_link" href="https://yugsudani.github.io/weather/"><img className="work_img" src={weather} alt="projects" /></a>
                    <a className="work_link" href="https://yugsudani.github.io/game1/"><img className="work_img" src={game1IMG} alt="projects" /></a>
                    {/* <Link className="work_link" to="./"><img className="work_img" src={work3} alt="projects" /></Link> */}
            </div>
        </>
    )
}

export default Work;