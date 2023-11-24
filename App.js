import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));


const restaurentObject = [{ "id": 1, "restaurant": "Robena", "city": "Petrodvorets", "avatar": "https://robohash.org/voluptateminventorecum.png?size=50x50&set=set1" },
{ "id": 2, "restaurant": "Jenda", "city": "Kapinango", "avatar": "https://robohash.org/ipsumoptionostrum.png?size=50x50&set=set1" },
{ "id": 3, "restaurant": "Ashil", "city": "Mimbaan Timur", "avatar": "https://robohash.org/adremsint.png?size=50x50&set=set1" },
{ "id": 4, "restaurant": "Rayshell", "city": "Murfreesboro", "avatar": "https://robohash.org/consequaturvoluptatemblanditiis.png?size=50x50&set=set1" },
{ "id": 5, "restaurant": "Raleigh", "city": "Ząbkowice Śląskie", "avatar": "https://robohash.org/praesentiumipsumprovident.png?size=50x50&set=set1" },
{ "id": 6, "restaurant": "Paige", "city": "Bulualto", "avatar": "https://robohash.org/atquisvelit.png?size=50x50&set=set1" },
{ "id": 7, "restaurant": "Glen", "city": "Trubchevsk", "avatar": "https://robohash.org/nonetquaerat.png?size=50x50&set=set1" },
{ "id": 8, "restaurant": "Vail", "city": "Rennes", "avatar": "https://robohash.org/nonautdolor.png?size=50x50&set=set1" },
{ "id": 9, "restaurant": "Fitzgerald", "city": "Diónysos", "avatar": "https://robohash.org/remestsunt.png?size=50x50&set=set1" },
{ "id": 10, "restaurant": "Jake", "city": "Xinjia", "avatar": "https://robohash.org/adipiscinonaut.png?size=50x50&set=set1" }]

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

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="restaurent-card">
      <img className="image-border" src={resData.avatar}></img>
      <h3>{resData.restaurant}</h3>
      <h4>{resData.city}</h4>

    </div>

  );
}

const BodyContainer = () => {

  return (
    <div className="restaurent-container">
      {restaurentObject.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} />))}

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



const Header = () => (
  <div id="container">
    <HeaderComponent />
    <BodyContainer />
    <FooterComponent />
  </div>
);
root.render(<Header />);
