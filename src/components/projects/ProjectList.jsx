import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";

const ProjectList = ({projects,auth}) => {
    return (
        <div className="project-list section">
            {projects && projects.map (project => {
                return (
                    <div key={project.id}>
                        <ProjectSummary project={project} auth={auth}/>
                    </div>
                )
            })
            }
        </div>
    );
}

export default ProjectList;
