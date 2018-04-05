import React, {Component} from 'react';

export default class About extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <section id='container'>
                <div className='aboutheader'>About</div>
                <div className='aboutdetails'>
                    <p>This is stuff about me.</p>
                </div>
            </section>
        )
    }

}