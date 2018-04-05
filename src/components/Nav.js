import React, {Component} from 'react';
import github from '../images/logos/Github.png';
import linkedin from '../images/logos/linkedin.png'

export default class Nav extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div id='nav'>
                <div id='icons'>
                    <img alt='Github Link' src={github}/>
                    <img alt='LinkedIn Link' src={linkedin}/>
                </div>
                <div id='navlinks'>
                    <a href='#'><div><p>ABOUT</p></div></a>
                    <a href='#'><div><p>SKILLS</p></div></a>
                    <a href='#'><div><p>PROJECTS</p></div></a> 
                </div>          
            </div>
        )
    }
}