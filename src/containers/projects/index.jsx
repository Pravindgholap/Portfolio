import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";

const Projects=()=>{
    return(
        <section id="project" className="project">
        <PageHeaderContent
            headerText="My Projects"
            icon={<BsInfoCircleFill size={40} />}
        />
    </section>
    )
}
export default Projects;