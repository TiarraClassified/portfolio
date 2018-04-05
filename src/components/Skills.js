//map over array of skills objects that have name and icon
import express from '../images/logos/express.png';
import React, {Component} from 'react';
import sass from '../images/logos/Sass.png';
import aframe from '../images/logos/aframe-logo.png';


export default class Skills extends Component{
    constructor(){
        super()
        this.state={
            icons: [{name: 'Express', icon: express }, {name: "SASS", icon: sass}, {name: 'Aframes', icon: aframe}]
        }
    }

    render(){
        return(
            <section id='container'>
                <div className='skillsheader'>Skills</div>
                <div className='skillsdetails'>

                    {this.state.icons.map((skill,i)=>{
                        return(
                            <div key={i} className='icon'>
                                <img src={skill.icon} alt='express' style={{height: '50px'}}/>
                                <span>{skill.name}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }

}