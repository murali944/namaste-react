import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Namaste React using JSX !!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => <h2>Namaste React Header Component !!</h2>;
const Footer = () => <h2>Namaste React Footer Component !!</h2>;
const Heading = () => (
  <div id="container">
    <Header/>
    <h1>Murali this is from Heading Component !!</h1>
    <Footer/>
  </div>
);
root.render(<Heading />);
