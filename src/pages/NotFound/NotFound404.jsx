import React from "react";
import { useLocation } from "react-router-dom";

function NotFound404() {
    let location = useLocation();
    return (
        <div>
            <h1>
                lokasi tidak di temukan<code>{location.pathname}</code>
            </h1>
        </div>
    );
}

export default NotFound404;
