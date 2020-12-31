import React from "react";

export const FormSelect = ({label, changed, value, errMessage, required, options,handleChange}) => {
    return (
        <div className="form-group">
            {label && label.trim() !== "" ? <label htmlFor="input">{label}</label> : ""}
            <select className="form-control" >
                {options.map((o,i) => (<option key={i} value={o}>{o}</option>))}
            </select>
            {errMessage && errMessage.trim() !== "" ?
                <span className="text-invalid">{errMessage}</span> : ''}
        </div>
    )
}
