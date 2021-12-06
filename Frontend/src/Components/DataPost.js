import { Component } from "react";
import "./../Styles/InfoStyle.css"

import "./../Styles/LatestPost.css";
import Post1 from "./../Images/Img_Blog/autumn.jpg";
import BoyImg from "./../Images/Boy.png"
import { Link } from "react-router-dom";

class DataPost extends Component{
     // Constructor
     constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch("http://localhost:3001/final")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            });
    }
    render(){
        const { items } = this.state;
        return(
            <>
               <div className="outerctn">
                   <div className="innerctn">
                        <h5>More From The Siren</h5>
                        <hr />
                        <div className={"DPostOuter"}>
                                {items.map((data,key) =>{
                                return(
                                    <div className={"DPostInner"}  key={key}>
                                      <Link to="/" className={"Dpostlink"}>
                                            <p className={"DPostpara"}>{data.para}</p>
                                            <img src={Post1} alt="PostImage" className={"DPostImg"}/>
                                            <h5 className={"DPostheading"}>{data.heading}</h5>
                                           
                                            <div className={"BoyContainer"}>
                                                    <img src={BoyImg} alt="Boy" className={"BoyImgS"} />
                                                    <div className={"BoyInnerContainer"}>
                                                            <h6 className={"BoyHeading"}>{data.name}</h6>
                                                            <p className={"BoyPara"}>{data.time}</p>
                                                    </div>
                                            </div>
                                      </Link>
                                     </div>
                                )
                            })}  
                        </div>
                   </div>
               </div>
            </>
        )
    }
}

export default DataPost;