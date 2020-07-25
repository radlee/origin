import React from "react";
import { Progress } from 'reactstrap';
export default (props) => {
    return (
        <div className="container">
           
           <div className="text-center">Current Period : 75% Done</div>
            <Progress animated color="warning" value={75} />
           
        </div>
    )
} 