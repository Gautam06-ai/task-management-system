import React from "react";
import "./Project.css";
export default function Project() {
    return (
        <>
            <form>
                <h2 className="form-title">Create Project</h2>
                <input className="form-input" type="text" placeholder="Project name" />
                <textarea className="form-des" placeholder="Description" />
                <button className="form-button" type="submit">Create</button>
            </form>
        </>
    );
}