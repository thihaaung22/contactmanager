import React from "react";

export default function About(props) {
  return (
    <div>
      <h1 className="display-4">About Contact Manager</h1>
      <p class="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}

//cant use this keyword inside functional component
//accessing params props.match,params.id
