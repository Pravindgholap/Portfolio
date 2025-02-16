import React  from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from "../../components/pageheadercontent";
import { Animate } from "react-simple-animate";
import './styles.scss';
import {DiAndroid, DiApple} from "react-icons/di";
import {FaDev, FaDatabase} from "react-icons/fa";


const personalDetails = [
    {
        label : "Name",
        value : "Pravin Gholap",
    },
    {
        label : "Age",
        value : "21",
    },
    {
        label : "Address",
        value : "Kalyan, Thane, Maharashtra, India",
    },
    {
        label : "Email",
        value : "pravXXXXXlap9110@gmail.com",
    },
    {
        label : "Contact No.",
        value : "+91 XXXXXXXXXX",
    },
]

const jobSummary = 'I am a skilled Full-Stack Developer with expertise in the MERN (MongoDB, Express.js, React, Node.js) stack, capable of building scalable and efficient web applications. I have a strong understanding of RESTful APIs, enabling me to design and integrate seamless backend services. Additionally, I have knowledge of machine learning, allowing me to work on AI-powered applications and data-driven solutions. My skill set combines front-end and back-end development with a deep understanding of API design and AI-driven innovations.'
const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent 
            headerText ="About Me"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="about_content">
                <div className="about_content_personal_wrapper">
                <Animate
                play
                duration ={1.5}
                delay={1}
                start={{
                    transform : "translateX(-900px)",
                    opacity: 0,
                }}
                end={{
                    transform : "translateX(0px)",
                    opacity: 1,
                }}>
                <h3>Full-Stack Developer</h3>
                <p>{jobSummary}</p>
                </Animate>
                <Animate
                play
                duration ={1.5}
                delay={1}
                start={{
                    transform : "translateX(500px)",
                    opacity: 0,
                }}
                end={{
                    transform : "translateX(0px)",
                    opacity: 1,
                }}>
                <h3 className="personalinfo">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item, i) =>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
                </div>
                <div className="about_content_services_wrapper">
                <Animate
                play
                duration ={1.5}
                delay={1}
                start={{
                    transform : "translateX(200px)",
                    opacity: 0,
                }}
                end={{
                    transform : "translateX(0px)",
                    opacity: 1,
                }}>
                    <div className="about_content_services_wrapper_content">
                        <div>
                            <FaDev size={60} color="var(--color-theme-main-color)"/>
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--color-theme-main-color)"/>
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--color-theme-main-color)"/>
                        </div>
                        <div>
                            <DiApple size={60} color="var(--color-theme-main-color)"/>
                        </div>
                    </div>
                    </Animate>
                </div>
                

            </div>
        </section>
    )
}
export default About;
