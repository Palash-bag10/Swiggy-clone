import React from "react"
import ReactDOM  from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// How to create nested HTML structure inside React
/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *      </div>
 *  </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         React.createElement(
//             "h1",
//             {},
//             "I'm h1 tag"
//         )
//     )
// )

// How to create siblings inside React
/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *  </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"}, [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag"),
//         ]
//     )
// )

/**
 * 
 *  <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm h1 tag</h1>
 *          <h2>I'm h2 tag</h2>
 *      </div>
 *  </div>
 * 
 */

// const parent = React.createElement(
//     "div",
//     {id: "parent"},
//     [
//         React.createElement("div", {id: "child"}, [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag"),
//         ]),
//         React.createElement("div", {id: "child2"}, [
//             React.createElement("h1", {}, "I'm h1 tag"),
//             React.createElement("h2", {}, "I'm h2 tag"),
//         ])   
//     ]
// )

// const jsxHeading = (
//     <h1>Namaste React using JSX 🚀</h1>
// );

const Title = () => (
    <h1>Namaste React using JSX 🚀</h1>
);

// React Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
} 

// const HeadingComponent2 = () => (
//     <div id="container">
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// Render Title component inside container
// const HeadingComponent2 = () => (
//     <div id="container">
//         <Title/>
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// // render js code inside component
// const number = 1000;

// const HeadingComponent2 = () => (
//     <div id="container">
//         <h2>{number}</h2>
//         <h1>Namaste React Functional Component</h1>
//     </div>
// );

// Render element inside component
const title = (
    <h1>Namaste React using JSX 🚀</h1>
);

const HeadingComponent2 = () => (
    <div id="container">
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
// root.render(jsxHeading);
// Render component
root.render(< HeadingComponent2 />)