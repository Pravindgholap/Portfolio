import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss'

const Home=()=>{
    const navigate = useNavigate();
    const handleNavigatetoContact =() =>{
        navigate('/contact')
    }

    return(
        <section id="home" className="home">
            <div className="home_textwrap">
                <h1>
                    <span className="first">Hello, I'm Pravin</span> <br />
                    <span className="second">Frontend developer</span>
                </h1>
            </div>
            <div className="home_contact">
                <button onClick={handleNavigatetoContact}>Contact</button>
            </div>
        </section>
    )
}
export default Home;