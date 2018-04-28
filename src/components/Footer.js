import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return(
            <div className="site-footer">
                {this.props.children}
            </div>
        )
    }
}