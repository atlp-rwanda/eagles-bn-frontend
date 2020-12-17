import  React from "react";
import "./loading.scss";
export default function Loading({white}) {
        return (
            <div className={`lds-ring ${white?'lds-ring-white':''}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
}
