// Creating The Fisrt Heading Of the Page The Siren
import { Link } from "react-router-dom";
// Import the css
import "./Styles/Heading.css"
import "./Styles/index.css"
// Import The Image
import collape from "./Images/Nav.png"
import { Component } from "react";

class Heading extends Component{

   // Function For Toggle navbar
   toggleBox = () => {
        var element = document.getElementById("navbarH");
      //   console.log(element)
        element.classList.toggle("navbarHide");
       
    };
   render(){
    return(
        <>
          <div className={"HeadingSpacing"}>
                <h1><span className={"headingThe"}>The</span><span className={"headingS"}>Siren</span></h1>
                <div className={"NavbarCollapse"}>
                    <img src={collape} alt="..." className={"NavImg"} onClick={this.toggleBox} />
                </div>
          </div>
          <div className={"navbar navbarHide"} id="navbarH">
              <div className={"navbarsmall"}>
                 <Link to="/" className={"HeaderLink"}>Home</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Bollywood" className={"HeaderLink"}>Bollywood</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Technology" className={"HeaderLink"}>Technology</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Hollywood" className={"HeaderLink"}>Hollywood</Link>
              </div>
              <div className={"navbarsmall"}>
                 <Link to="/Fitness" className={"HeaderLink"}>Fitness</Link>
              </div>
              <div >
                 <Link to="/Food" className={"HeaderLink"}>Food</Link>
              </div>
          </div>
          <hr style={{height:"2px"}}/>
        </>
    )
   }
}

export default Heading;