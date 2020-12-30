import React from 'react'

function tripStatus() {
    const handleChange=()=>{
        console.log("changed in ..")
    }
    return (
        <select className="form-control" onChange={handleChange}>
        <option value="rejected">reject</option>
        <option value="approved">approve</option>
    </select>
    )
}

export default tripStatus
