import React from 'react';
import moment from 'moment';



const Notifications = (props) => {
    const {notifications} = (props);
    return (
        <div className="section">
            <div className="card z-depth-0">
                <div className="card-content notifications">
                    <span className="card-title">
                        <ul>
                        Notifications
                                {notifications && notifications.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <span className="notes">
                                                <span className="pink-text usertext">
                                                    {item.user}<br/></span>
                                                 <span>
                                                    {item.content}</span>
                                                <div className="grey-text note-date">
                                                    {moment(item.time.toDate()).fromNow()}
                                                </div>
                                            </span>

                                        </li>
                                    )
                                })}
                            
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Notifications;
