import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import Draggable from 'react-draggable';


const ProjectSummary = ({project,auth}) => {
    console.log(project)
    console.log(auth)
    return (
    ( project.authorId == auth.uid ? 

    <div className="card z-depth-0 project-summary">
        <div className="card-content grey-test text-darken-3">

            <span className="card-title">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
            <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            <Link to={'/project/' + project.id} >
                        <AiOutlineEdit/>
            </Link>
        </div>
        
    </div>: null )

    );
}

export default ProjectSummary;
