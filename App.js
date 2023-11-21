/*<div id="parent">
    <div id="child">
        <h1 id ="head1">Hello Murali !!</h1>
        <h2 id ="head2">Hello Murali !!</h1>
    </div>
</div>
*/
const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Welcome to React by Namaste React !!"
);


const pattern = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
    [React.createElement("h1", { id: "head1" }, "Hello Murali !!"), React.createElement("h2", { id: "head2" }, "Hello Murali")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(pattern);