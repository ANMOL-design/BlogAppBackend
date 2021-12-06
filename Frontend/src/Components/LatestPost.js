import "./../Styles/LatestPost.css";
import Post1 from "./../Images/Img_Blog/autumn.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";

class LatestPost extends Component{
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
        fetch("http://localhost:3001/")
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
            <h4><span className={"postbase"}>The</span> Latest</h4>

            <div className={"PostOuter"}>
                {items.slice(0, 3).map((data,key) =>{
                    return(
                        <div className={"PostInner"}  key={key}>
                            <Link to={data.link} className={"postlink"}>
                                <img src={Post1} alt="PostImage" className={"PostImg"}/>
                                <h5 className={"Postheading"}>{data.heading}</h5>
                                <p className={"Postpara"}>{data.description}</p>
                                <p className={"Posttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                            </Link>
                        </div>
                      )
                  })}  
            </div>
        </>
    )
    }
}

export default LatestPost;