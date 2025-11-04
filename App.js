/** 
 * 
 *  <div id="parent">
 *       <div id="child">
 *             <h1>I'm h1 tag</h1>
 *             <h2>I'm h2 Tag</h2>
 *       </div>
 *  <div id="child2">
               <h1>I'm h1 Tag</h1>
               <h2>I'm h2 Tag</h2>
         </div>
 *  </div>
 * 
*/

// this is core react

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "1" }, "This is Namaste React"),
    React.createElement("h2", { id: "2" }, "I'm h2 tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {  }, "I'm h1 tag"),
    React.createElement("h2", {  }, "I'm h2 tag"),
  ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//  const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello world from React!");
// basically h1 is an object not a tag
//  console.log(heading); //object

//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(heading);
