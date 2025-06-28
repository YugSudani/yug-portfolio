import React from "react";
import work3 from "../components/IMGS/work3.jpg"

const Skills=()=>{


    return(
        <>
            <p id="Skill" className="section_headings">Skills</p>
            <div className="skill_main_cnt">

                    <div className="skill_text_cnt">
                         <p>🚀 Front-End Development
                            React.js, Next.js, Redux, HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Bootstrap <br /><br />

                            💾Back-End Development
                            Node.js, Express.js, RESTful APIs, JWT Authentication <br /><br />

                            🛢️Database Management
                            MongoDB, Mongoose <br /><br />
 
                            ⚙️🔧Tools & Technologies
                            Git, GitHub, VS Code, Postman, Netlify <br /><br />

                            ✨Other
                            Responsive Web Design, Clean Code Practices, Debugging, API Integration</p>
                        <br />
                        <table className="skill_table">
                                    <thead>
                                        <tr>
                                        <th>React</th>
                                        <th>MongoDB</th>
                                        <th>Node.js</th>
                                        <th>Express</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                                <td>Event Handling </td>
                                                <td>MongoDB Basics</td>
                                                <td>Core Modules</td>
                                                <td>Middleware in Express</td>
                                        </tr>
                                        <tr>
                                                <td>State Management</td>
                                                <td>Data Modeling</td>
                                                <td>Asynchronous Programming</td>
                                                <td>Routing in Express</td>
                                        </tr>
                                        <tr>
                                                <td>Routing</td>
                                                <td>Querying Data</td>
                                                <td>Building Web Servers</td>
                                                <td>RESTful APIs</td>
                                        </tr>
                                        <tr>
                                                <td>Hooks</td>
                                                <td>Indexing</td>
                                                <td>Node.js with Express</td>
                                                <td>Error Handling in Express</td>
                                        </tr>
                                        <tr>
                                                <td> Context API</td>
                                                <td>CRUD Operation</td>
                                                <td>NPM Modules</td>
                                                <td>Handling Data Flow</td>
                                        </tr>
                                    </tbody>
                            </table>

                    </div>
            
                    <img  className="skill_img_" src={work3} alt="skill    " />
            </div>
        </>
    )
}

export default Skills;