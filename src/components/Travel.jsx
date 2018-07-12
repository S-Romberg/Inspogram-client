import React, { Component }  from 'react'
import Card from './Card'


class Travel extends Component{
    render() {
        var travel = this.props.quotes.filter(quote => quote.category === 'Travel')
        var quotesData = travel.map( quote => {
            return  <ul key={quote.id} ><li id={quote.id} className='quote' >{quote.quote}</li> <li className='author'>{quote.author}</li> </ul>
         })
         var card = this.props.images.map(image => {
            if(image.category === 'Travel'){
           return  <Card renderCard={this.props.renderCard} quotes={quotesData} key={image.id} category={image.category} img={image.img} src={image.src} />
         }
         })

        return(
         <div className="row">
            {card}
          </div>
        )
    }
}

export default Travel