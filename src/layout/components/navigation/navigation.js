import React from "react";
import "./navigation.scss";
import {useSelector} from "react-redux";

export default function Navigation() {
    const loading = useSelector(state => state.loading);
    return (
        <div className="navigation">
            <span>Barefoot Nomad</span>
            {loading?<span>Loading...</span>:''}
        </div>

    )
}
