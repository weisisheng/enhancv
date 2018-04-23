import React from "react";

export class ProgressBar extends React.Component {

    render() {
        return(
            <div className="progress-bar">
                Progress:
                <div className="progress-bar-base">
                    <span style={{width: "25%"}}></span>
                </div>
            </div>
        )
    }

}