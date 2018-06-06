import React, { Component }  from 'react'

class Card extends Component{
    
    render() {
        return(

            <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                <img src="https://farm2.staticflickr.com/1727/42523988671_e7f7343321_z.jpg" alt='beach' />
                  <span className="card-title">Instaration</span>
                  <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
                </div>
                <div className="card-content">
                  <p>Not all those who wander are lost.</p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Card