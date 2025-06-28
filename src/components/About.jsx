import React from "react";
import y1 from "../components/IMGS/y121.jpg"

const About=()=>{


    return(
        <>
            <p id="About" className="section_headings">About</p>
       <div className="about_main_container"> 

            <div className="about_inner_cnt">
                <img className="about_img" src={y1} alt="about" />
            </div>
                <p className="about_description">🚀 Hey there — I’m a Yug Sudani - MERN stack developer who loves turning complex ideas into clean, efficient, and scalable web applications.
<br /><br />From crafting responsive front-ends with React ⚛️ to architecting robust back-ends with Node.js and Express, I build digital experiences that don’t just work — they feel good to use.
                    
When I'm not coding, you’ll probably find me exploring new JavaScript libraries, contributing to open-source projects, or dreaming up side projects no one asked for — but everyone ends up loving.

<br /><br />Tech I vibe with: React ⚛️, Node.js 🖥️, Express 🚀, MongoDB 🍃, TailwindCSS 💨, and a sprinkle of everything in between.

<br /><br />Let’s build something awesome together.</p>


       </div>
       </>
    )
}


export default About;