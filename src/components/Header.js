import React, { Component }  from 'react'

class Header extends Component{
    
    render() {
        return(
            <header className="">
                <div className='title'>
                    <img className='logo' src={this.props.logo} alt='logo'/>
                    <div className='black-line'></div>
                    <h1 className="animated flipInX">Insta Inspiration</h1>
                </div>
                <div className='nav'>
                    <img className='button' src='home-button.png' alt='home' />
                    <img className='button' src='heart-button.png' alt='heart' />
                    <img className='button' src='travel-button.png' alt='suitcase' />
                </div>
          </header>
        )
    }
}

export default Header