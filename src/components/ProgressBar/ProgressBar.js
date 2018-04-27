import React from "react";
import PropTypes from "prop-types";

import "./ProgressBar.css";

export default class ProgressBar extends React.Component {
    static propTypes = {
        percent: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number
    }

    static defaultProps = {
        height: 10
    }

    calcProgressAsWidth = () => {
        return parseInt(this.props.width * (this.props.percent / 100), 10)
    }

    render() {
        const { height, width } = this.props;
        return(
            <div className="progress-bar">
                Progress:
                <div className="progress-bar-base" style={{width}}>
                    <div style={{
                        width: this.calcProgressAsWidth(),
                        height
                    }}></div>
                </div>
            </div>
        )
    }
}

