import React, { Fragment } from "react";

import "./board-header.style.scss";

export default function BoardHeader(props) {
    return (
        <Fragment>
            <div id="board-header" className="board-header">
                <h1>Smart Gaz Board </h1>
            </div>
        </Fragment>
    );
}

BoardHeader.propTypes = {

};