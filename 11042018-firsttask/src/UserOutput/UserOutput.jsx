import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p className="UserTitle">Who is it?</p>
            <p className="UserName">{props.username}</p>
            <img className="UserImg" src={props.picture} alt={props.username}/>
        </div>
    )
}

export default userOutput;