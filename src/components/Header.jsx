import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import home from '../home-button.png'
import love from '../heart-button.png'
import travel from '../travel-button.png'
import add from '../add-icon.png'

class Header extends Component{
    
    render() {
        return(
            <header className="">
                <div className='title'>
                    <img className='logo' src={this.props.logo} alt='logo'/>
                    <div className='black-line'></div>
                    <h1>Inspo-gram</h1>
                </div>
                <div className='nav'>
                    <Link to='/'><img className='button' src={home} alt='home' /></Link>
                    <Link to='/love'><img className='button' src={love} alt='heart' /></Link>
                    <Link to='/travel'><img className='button' src={travel} alt='suitcase' /></Link>
                    <Link to='/add'><img className='button' src={add} alt='add'/></Link>
                </div>
          </header>
        )
    }
}

export default Header