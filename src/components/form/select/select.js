import React from "react";

export const FormSelect = ({label, changed, value, errMessage, required, options}) => {
    return (
        <div className="form-group">
            {label && label.trim() !== "" ? <label htmlFor="input">{label}</label> : ""}
            <select className="form-control" onChange={() => changed(event)}>
                {options.map((o,i) => (<option key={i}>{o}</option>))}
            </select>
            {errMessage && errMessage.trim() !== "" ?
                <span className="text-invalid">{errMessage}</span> : ''}
        </div>
    )
}
