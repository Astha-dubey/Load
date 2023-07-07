import React from "react";
import Gallery from "../Components/Content";
const Home = () => {
    console.log("react rendering hone");
    return (
        <div >
            <Gallery/>
            <h1 > Home Page</h1>
        </div>
    );
};
// ReactDOM.render(Home, document.getElementById('root'));  

export default Home;