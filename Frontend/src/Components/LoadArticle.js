import { Component } from "react"
import Load from "./../Images/arrow_down.svg"

import "./../Styles/Articles.css";
import ArticleI from "./../Images/Img_Blog/nature1.jpg";
import { Link } from "react-router-dom";



class LoadArticle extends Component{

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


    loadMoreData = () =>{
        var element = document.getElementById("LData");
        var more = document.getElementById("LLoad");
        var Less = document.getElementById("LLess");
        element.classList.toggle("LoaderHide");
        more.classList.toggle("LoaderHide");
        Less.classList.toggle("LoaderHide")
    }
    render(){
        const { items } = this.state;
        return(
            <>
               <div className={"loadMore"} id="LLoad" onClick={this.loadMoreData}>
                   <img src={Load} alt="Load" />
                   <span className={"loader"}>Load More</span>
               </div>

               <div id="LData" className={"LoaderHide"}>
                    {items.map( (data, key) => {
                    return(
                        <div className={"OuterA"} key={key} >
                            <img src={ArticleI} alt="Article" className={"AImage"} />

                            <div>
                                <Link to={data.link} className={"Link"}>
                                    <h3 className={"Aheading"}>{data.heading}</h3>
                                    <p className={"Apara"}>{data.description}</p>
                                </Link>
                                <p className={"Posttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                            </div>
                         </div> 
                        )
                     })}
               </div>

               <div className={"loadMore LoaderHide"} id="LLess" onClick={this.loadMoreData}>
                   <img src={Load} alt="Load" className={"ImgRot"}/>
                   <span className={"loader"}>Show Less</span>
               </div>
            </>
        )
    }
}

export default LoadArticle;