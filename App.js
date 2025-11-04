const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "hi! I'm H1 tag."),
        React.createElement("h2", {}, "hi! I'm H2 tag."),
    ])
);

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc"},
    "Hello World from React!"
); 

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);