import { Component } from "react";
import { BrowserRouter, Route,  Switch} from "react-router-dom";
import Data from "./Data";
import Footer from "./Footer";
import Heading from "./Header";
import Home from "./Home"
import Bollywood from "./Pages/Bollywood";
import Fitness from "./Pages/Fitness";
import Food from "./Pages/Food";
import Hollywood from "./Pages/Hollywood";
import Technology from "./Pages/Techology";
import "./Styles/index.css";

class App extends Component {
      
  render(){
    return (
      <BrowserRouter>
          {/* Adding the header Component on Top of All Pages we react */}
          <Heading />
          <Switch>
              <Route path="/data" component={Data} />
              <Route path="/Food" component={Food} />
              <Route path="/Fitness" component={Fitness} />
              <Route path="/Hollywood" component={Hollywood} />
              <Route path="/Technology" component={Technology} />
              <Route path="/Bollywood" component={Bollywood} />
            
              <Route path="/" component={Home} />
          </Switch>
          <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
