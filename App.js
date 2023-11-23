import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="heading">Namaste React using JSX !!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => <h2>Namaste React Header Component !!</h2>;

const HeaderComponent = () => {
  return (
    <div className="header">
      <img src="https://seeklogo.com/images/Z/zomato-logo-01283E6B73-seeklogo.com.png" className="logo"></img>
      <div className="header-right">
        <a className="active" href="#home">Home</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );

}

const RestaurantCard = ({resName,cusine}) => {
  return (
    <div className="restaurent-card">
      <img src="https://seeklogo.com/images/Z/zomato-logo-01283E6B73-seeklogo.com.png"></img>
      <h2>{resName}</h2>
      <h2>{cusine}</h2>
    </div>

  );
}

const BodyContainer = () => {

  return (
    <div className="restaurent-container">
      <RestaurantCard resName="Angara" cusine="Biryani,Tandoori"/>
      <RestaurantCard resName="Swagath" cusine="Biryani,Mutoon"/>

    </div>
  );
}

const FooterComponent = () => {
  return (
    <div className="header">
      <div className="header-center">
        <a href="#home">ABOUT ZOMATO</a>
        <a href="#contact">ZOMAVERSE</a>
        <a href="#about">FOR RESTAURANTS</a>
      </div>
    </div>
  );

}



const Heading = () => (
  <div id="container">
    <HeaderComponent />
    <BodyContainer />
    <FooterComponent />
  </div>
);
root.render(<Heading />);
