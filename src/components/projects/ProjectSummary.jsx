import React, {Component} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import Draggable from 'react-draggable';


class ProjectSummary extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    // componentWillReceiveProps(nextProps) {

    // }

    // shouldComponentUpdate(nextProps, nextState) {

    // }

    // componentWillUpdate(nextProps, nextState) {

    // }

    // componentDidUpdate(prevProps, prevState) {

    // }

    componentWillUnmount() {

    }

    render() {
        const {project,auth} = this.props;
        return (
            ( project.authorId == auth.uid ? 
                <Draggable
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                    
                <div className="card z-depth-0 project-summary handle">
                    <div className="card-content grey-test text-darken-3">
            
                        <span className="card-title">{project.title}</span>
                        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                        <Link to={'/project/' + project.id} >
                                    <AiOutlineEdit/>
                        </Link>
                    </div>
                    
                </div>
                </Draggable>: null )
        )
    }
}

// const ProjectSummary = ({project,auth}) => {
//     console.log(project)
//     console.log(auth)
//     return (
//     ( project.authorId == auth.uid ? 

//     <div className="card z-depth-0 project-summary">
//         <div className="card-content grey-test text-darken-3">

//             <span className="card-title">{project.title}</span>
//             <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
//             <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
//             <Link to={'/project/' + project.id} >
//                         <AiOutlineEdit/>
//             </Link>
//         </div>
        
//     </div>: null )

//     );
// }

export default ProjectSummary;
