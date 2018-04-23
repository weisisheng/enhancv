import React, { Component } from "react";

export class Footer extends Component {
    render() {
        return(
            <div class="site-footer">
                {this.props.children}
            </div>
        )
    }
}