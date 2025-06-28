import React from "react";

const Contect=()=>{

    return(
        <>
            <p id="Contact" className="section_headings">Contact</p>
            <div className="contact_main_cnt">
                <form action="./" method="get">
                    <table className="tbl_contact">
                        <tr>
                            <td>Full Name : </td>
                            <td> <input placeholder="Your Full Name" type="text" /></td>
                        </tr>
                        
                        <tr>
                            <td>Email Adress : </td>
                            <td> <input placeholder="Your Email Address" type="Email" /></td>
                        </tr>

                        <tr>
                            <td>Contact Number :</td>
                            <td> <input placeholder="Contact Number" type="text" /> </td>
                        </tr>
                    </table>
                        
                    
                <button className="btn_contact_submit" onClick={()=>alert("Details IN _ _ Thank You _ _")} type="">Submit</button>
                </form>

        
            </div>
        </>

    )
}

export default Contect;