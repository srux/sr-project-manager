import React, { Component } from 'react'
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { auth } from 'firebase';
import { Redirect } from 'react-router-dom';
import Draggable from 'react-draggable';

 class Dashboard extends Component {
    constructor(props){
        super(props);
            this.state = {

         }
     }
    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
      };

 

    render() {
        // console.log(this.props);
        const {projects,auth,notifications} = this.props;
        // console.log(projects)
        // console.log(auth)
        if (!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className="dashboard container">
                    <div className="col s12 m2 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                <div className="row">

                            <div className="col s12 m3 handle">
                        <ProjectList projects={projects} auth={auth}/>
                            </div>
                 

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications
    }
}

export default compose(
        connect(mapStateToProps),
        firestoreConnect([
            { collection: 'projects', orderBy:['createdAt', 'desc'] },
            { collection: 'notifications', limit:3, orderBy:['time', 'desc']}
        ])
    )(Dashboard);