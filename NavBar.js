import React from 'react';
import './App.css';
import myData from './data.json';


        
//this is the subNaviation  component
class SubNavigation extends React.Component{
        constructor(props){
          super(props);
          this.mouseEnter=this.mouseEnter.bind(this);
          this.mouseLeft=this.mouseLeft.bind(this);
        }
        
       mouseEnter(){
           this.props.OnMouseEnter(this.props.index);         
       }// when mouse enter the sub component
       
       mouseLeft(){
           this.props.whenMouseLeave();
       } // when mouse leaves the subcomponent
      
       render(){
        const subNav= myData.navigation[this.props.index+1];
        return(
            <div   onMouseOver={this.mouseEnter}
                                onMouseLeave={this.mouseLeft}  >
                <ul className={this.props.style} >
                        {Object.keys(subNav).map((index,value) =>{            
             return <li key={value} >        
                      <a href={subNav[index]}> {index}
                       </a>
                     </li>;
                    })}                                      
                </ul>
            </div>
        );// return
     }// render
    }// SubNavigation component        
 

// this is our main component
class NavBar extends React.Component{       
     
    constructor(){
        super();
        this.mouseLeft=this.mouseLeft.bind(this);
        this.mouseEnter=this.mouseEnter.bind(this)  ;
        this.state={
            style:"hideNav",
            indexNo:1
        };
    }// constructor
    
    
   // to show the subNavigation Component
    mouseEnter(value){
          this.setState({
                     style:"showNav",
                      indexNo:value        
         })
    }// mouse enter
  
   // to hide the subNavigation component 
    mouseLeft(){
         return(
            this.setState({
                style:"hideNav"
            })
        )
    }// mouseLeft
    
    render(){      
        const mainNav=myData.navigation[0];
        return(    
        <div  className="mainNav">
           <ul >
            {Object.keys(mainNav).map((index,value) =>{            
               return <li key={value}   
                                    onMouseLeave={this.mouseLeft}     
                                    onMouseOver={()=>{   
                                                 this.setState({
                                                    style:"showNav",
                                                    indexNo:value        
                                                 })
                                    }}
                      >        
                      <a href={mainNav[index]}> {index}
                       </a>
                     </li>;
                    })}
            </ul>
            <SubNavigation  style={this.state.style} index={this.state.indexNo}
               OnMouseEnter={this.mouseEnter}   whenMouseLeave={this.mouseLeft} /> 
        </div>    
        );// return
    }//render
}// Nav Bar component

    
export default NavBar;
