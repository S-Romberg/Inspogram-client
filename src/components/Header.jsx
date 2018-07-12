import React, { Component }  from 'react'
import { Link } from 'react-router-dom'
import love from '../heart-button.png'
import travel from '../travel-button.png'
import add from '../add-icon.png'
import info from '../info.png'

class Header extends Component{
    render() {
        return(
            <header className="">
                <Link to='/'><div className='title'>
                    <img className='logo' src={this.props.logo} alt='logo'/>
                    <div className='black-line'></div>
                    <h1>Inspo-gram</h1>
                </div></Link>
                <div className='nav'>
                    <Link to='/love'><img className='button' src={love} alt='heart' /></Link>
                    <Link to='/travel'><img className='button' src={travel} alt='suitcase' /></Link>
                    <Link to='/add'><img className='button' onClick={this.props.clearProps} src={add} alt='add'/></Link>
                    <Link to='/about'><img className='button' id='about' src={info}/></Link>
                </div>
          </header>
        )
    }
}

export default Header