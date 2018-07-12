import React, { Component }  from 'react'
import love from '../heart-button.png'
import travel from '../travel-button.png'
import add from '../add-icon.png'

class About extends Component{
    
    render() {
        return(
            <div className='about'>
                <p>An app modeled after Instagram that inspires artistic Instagram posts. Pictures and quotes are paired by category to give you the best (and most believable) Insta you can have. Click on a picture to edit or delete the quote, click the <img src={add}/> button to add a quote, and choose the <img src={love} /> or <img src={travel} /> buttons to filter results based on love or travel. </p>
            </div>
        )
    }
}

export default About