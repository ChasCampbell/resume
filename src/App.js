import React, { Component } from 'react';
import AirBnBit from "./resources/AirBnBit";
import SmartScout from "./resources/SmartScout";
import UrbanGrill from "./resources/UrbanGrill";
import Engineering from "./resources/Engineering";
import Management from "./resources/Management";
import Sales from "./resources/Sales";
import More from "./resources/More";
import WebDev from "./resources/WebDev";
import './App.css';
import './resources/resources.css';

class App extends Component {
   state = {
        currentSlide: WebDev
    }
  
  handleClick = (id) => {
      console.log(id);
        switch (id) {
            case "web":
                this.setState({currentSlide: WebDev});
                break;
            case "sls":
                this.setState({currentSlide: Sales});
                break;
            case "mgr":
                this.setState({currentSlide: Management});
                break;
            case "eng":
                this.setState({currentSlide: Engineering});
                break;
            case "mor":
                this.setState({currentSlide: More});
                break;
            case "smt":
                this.setState({currentSlide: SmartScout});
                break;
            case "air":
                this.setState({currentSlide: AirBnBit});
                break;
            case "urb":
                this.setState({currentSlide: UrbanGrill});
            break;
            default: return (
                    console.log("handleClick bad case")
                    );
        }
    }
  
  render() {
    
    const Slide = this.state.currentSlide;
    
    return (
    <div className="restOfPage">
        <div className="row2">
            <div className="chasPicture">
                <img className="chas" src="./images/Chas.png" alt="ChasCampbell" id="chasPhoto"/>
            </div>
            <div className="btnGroup">
                <div className="headerPara">
                  <p className="buttonHead">Background Information</p>
                  <p id="btnPara">Click to Show.</p>
                </div>
                <div className="fiveButtons">
                    <div>
                          <button onClick={() => { this.handleClick("web")}} className="button" className="button" id="web" type="btn">Web Development</button>
                    </div>
                    <div>
                          <button onClick={() => { this.handleClick("sls")}} className="button" id="sls" type="btn">Sales</button>
                    </div>
                    <div>
                         <button onClick={() => { this.handleClick("mgr")}} className="button" className="button" id="mgr" type="btn">Management</button>
                    </div>
                    <div>
                         <button onClick={() => { this.handleClick("eng")}} className="button" className="button" id="eng" type="btn">Engineering</button>
                    </div>
                    <div>
                         <button onClick={() => { this.handleClick("mor")}} className="button" className="button" id="mor" type="btn">And More...</button>
                    </div>
                </div>
            </div>
            <div className="slides">
                <Slide />
            </div>
        </div>
        
        <div className="row2a">
            <div className="recent">
                <h5>Recent Graduate • UNC Charlotte Bootcamp • Full Stack Development</h5>
            </div>
        </div>
        
        <div className="row3">
            <div className="headsLeft">
                <p className="stars">********************</p>   
            </div>
            <div className="headsCenter">
                <div id="headline">
                    <p id="headsPara">Example Projects</p>
                </div>
            </div>
            <div className="headsRight">
                <p className="stars">********************</p>
            </div>
        </div>
        <div className="row4">
            <div className="proj1ss">
                <div className="ss">
                    <img id="ssSmart" className="screenshot" src="./images/smartscout.png" alt="SmartScout site screen shot"/>
                </div>
            </div>
            <div className="proj2ss">
                <div className="ss">
                <img id="ssAir" className="screenshot" src="./images/airbnbit.png" alt="AirBnBit site screen shot"/>
                </div>
            </div>
            <div className="proj3ss">
                <div className="ss">
                    <img id="ssUrban" className="screenshot" src="./images/urbangrill.png" alt="Urban Grill site screen shot"/>
                </div>
            </div>
        </div>
        
        <div className="row5">
            <div className="project1head">
                <h3 className="title">SmartScout</h3>
            </div>
            <div className="project2head">
                <h3 className="title">AirBnBit</h3>
            </div>
            <div className="project3head">
                <h3 className="title">Urban Grill</h3>
            </div>
        </div>
        
        <div className="row6">
            <div className="smartScoutDetails">
                <button onClick={() => { this.handleClick("smt")}} className="button" id="smt">Details<p className="btnPara">Click to Show at Upper Right.</p></button>
            </div>
            <div className="airBnBitDetails">
                <button onClick={() => { this.handleClick("air")}} className="button" id="air">Details<p className="btnPara">Click to Show at Upper Right.</p></button>
                
            </div>
            <div className="urbanGrillDetails">
                <button onClick={() => { this.handleClick("urb")}} className="button" id="urb">Details<p className="btnPara">Click to Show at Upper Right.</p></button>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
