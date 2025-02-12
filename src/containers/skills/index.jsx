import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageheadercontent";
import {skillsdata} from "./utils";
import { AnimateKeyframes } from "react-simple-animate";
import {Animate} from "react-simple-animate";
import { RadialBarChart, RadialBar } from 'recharts';
import './styles.scss';

const Skill=()=>{
    return(
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills_content_wrapper">
                {
                    skillsdata.map((item, i)=>(
                        <div key={i} className="skills_content_wrapper_content">
                            <Animate 
                            play
                            duration={1}
                            delay={0.3}
                            start ={{
                                transform : 'translateX(-200px)'
                            }}
                            end={{
                                transform : 'translateX(0px)'
                            }}>
                                <h3 className="skills_content_wrapper_content_category-text">{item.label}</h3>
                                <div>
                                    {
                                        item.data.map((skillsitem, j)=>(
                                            <AnimateKeyframes 
                                            play
                                            duration={1}
                                            keyframes={["opacity 0", "opacity 1"]}
                                            iterationCount="1"
                                            key={j}
                                            >
                                                <div className="progressbar_wrapper" key={j}>
                                                    <p>{skillsitem.skillName}</p>
                                                    <RadialBarChart 
                                                        width={120} 
                                                        height={120} 
                                                        cx="50%" 
                                                        cy="50%" 
                                                        innerRadius="80%" 
                                                        outerRadius="100%" 
                                                        barSize={5} 
                                                        startAngle={90}                                                       
                                                        endAngle={450}
                                                        data={[
                                                            { name: "Background", value: 100, fill: "#eee" }, // White/Gray background
                                                            { name: skillsitem.skillName, value: skillsitem.percentage, fill: "var(--color-theme-main-color)" }, // Progress color
                                                        ]}
                                                    >
                                                         <RadialBar
                                                            minAngle={1} // Ensures visibility for very small values
                                                            background // Enables background layer
                                                            clockWise
                                                            dataKey="value"
                                                        />
                                                    </RadialBarChart>
                                                </div>
                                            </AnimateKeyframes>
                                        ))
                                    }
                                </div>
                            </Animate>
                        </div>
                    ))
                }

            </div>
        </section>
    )
}
export default Skill;