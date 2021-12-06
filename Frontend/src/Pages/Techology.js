import { Component } from "react";
import "./../Styles/PageStyle.css"

import "./../Styles/Articles.css";
import Page from "./../Images/Img_Blog/nature1.jpg";
import { Link } from "react-router-dom";


import TopImg from "./../Images/Img_Blog/nature3.jpg"
import TopImg2 from "./../Images/Img_Blog/rocks.jpg"

import PageI from "./../Images/Img_Blog/building.jpg";
import Load from "./../Images/arrow_down.svg"

class Technology extends Component{

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            blogs: []
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        window.scrollTo(0, 0);
        fetch("http://localhost:3001/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                });
            });

        fetch("http://localhost:3001/blogs")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    blogs: json,
                });
        });
    }
    
    loadPageData = () =>{
        var element = document.getElementById("PageData");
        var more = document.getElementById("PageLoad");
        var Less = document.getElementById("PageLess");
        element.classList.toggle("LoaderHide");
        more.classList.toggle("LoaderHide");
        Less.classList.toggle("LoaderHide")
    }
    render(){
        const { items, blogs } = this.state;
        return(
            <>
               <h3 className={"Bheading"}>Technology</h3>

               
               <div className={"PTopPostion"}>
                    <h3 className={"headmar"}><span className={"Ptopheading"}>Top</span> Posts</h3>

                    <img src={TopImg} alt="Post" className={"PTopImage"} />
                    <h5 className={"PheadP"}>Catch waves with an adventure guide</h5>
                    <p className={"Ptoptravel"}><span style={{color: "#404040"}}>Travel</span> / June 2021</p>


                    {/* added post  */}

                    {items.map( (data, key) =>{
                        return(
                            <div className={"PNewTop"} key={key}>
                                    <img src={TopImg2} alt="Post" className={"PTopImagebtm"} />
                                    <Link to="/data" className={"PLink"}>
                                        <h6 className={"Pheadpost"}>{data.heading}</h6>
                                        <p className={"Ptoptravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                                    </Link>
                            </div>
                        )
                    })}
               </div>

               {blogs.map( (data, key) => {
                return(
                    <div className={"OuterP"} key={key}>
                        <img src={Page} alt="Pages" className={"PImage"} />

                        <div>
                            <Link to="/data" className={"PLink"}>
                                <h3 className={"Pheading"}>{data.heading}</h3>
                                <p className={"Ppara"}>{data.description}</p>
                            </Link>
                            <p className={"PPosttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                        </div>
                    </div> 
                )
            })}

            <div className={"AdvP"}>
               <div className={"AdvInner"}>Advertisement</div>
            </div>


            {/* load More Data  */}
            <div className={"loadMoreP"} id="PageLoad" onClick={this.loadPageData}>
                   <img src={Load} alt="Load" />
                   <span className={"loaderP"}>Load More</span>
               </div>

               <div id="PageData" className={"LoaderHide"}>
                    {blogs.slice(0,6).map( (data, key) => {
                    return(
                        <div className={"OuterP"} key={key} >
                            <img src={PageI} alt="PagesMore" className={"PImage"} />

                            <div>
                                <Link to="/data" className={"PLink"}>
                                    <h3 className={"Pheading"}>{data.heading}</h3>
                                    <p className={"Ppara"}>{data.description}</p>
                                </Link>
                                <p className={"PPosttravel"}><span style={{color: "#404040"}}>Travel</span>{data.year}</p>
                            </div>
                         </div> 
                        )
                     })}
               </div>

               <div className={"loadMoreP LoaderHide"} id="PageLess" onClick={this.loadPageData}>
                   <img src={Load} alt="Load" className={"ImgRotP"}/>
                   <span className={"loaderP"}>Show Less</span>
               </div>
            </>
        )
    }
}

export default Technology;