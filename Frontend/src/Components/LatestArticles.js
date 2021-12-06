import "./../Styles/Articles.css";
import ArticleI from "./../Images/Img_Blog/mountain2.jpg";
import { Link } from "react-router-dom";
import { Component } from "react";

class LatestArticle extends Component{
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
            <h4><span className={"postbase"}>Latest</span> Articles</h4>

            {items.map( (i) => {
                return(
                    <div className={"OuterA"} key={i.id}>
                        <img src={ArticleI} alt="ArticleK" className={"AImage"} />

                        <div>
                            <Link to={i.link} className={"Link"}>
                                <h3 className={"Aheading"}>{i.heading}</h3>
                                <p className={"Apara"}>{i.description}</p>
                            </Link>
                            <p className={"Posttravel"}><span style={{color: "#404040"}}>Travel</span>{i.year}</p>
                        </div>
                    </div> 
                )
            })}

            <div className={"Adv"}>
               <div className={"AdvInner"}>Advertisement</div>
            </div>     
        </>
    )
    }
}

export default LatestArticle;