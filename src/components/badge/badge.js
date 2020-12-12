import React from "react";
import "./badge.scss"

// Type can be primary, success or danger
export default function Badge({type, children}) {
    return (
        <span className={`badge badge-${type}`}>
            {children}
        </span>
    )
}
