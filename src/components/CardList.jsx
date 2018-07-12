import React, { Component }  from 'react'
import Card from './Card'


class CardList extends Component{
    render() {

        var quotesData = this.props.quotes.map( quote => {
             return  <ul key={quote.id}  ><li id={quote.id} className='quote' >{quote.quote}</li> <li className='author'>{quote.author}</li> </ul>
          })
         var card = this.props.images.map(image => {
            return  <Card renderCard={this.props.renderCard} quotes={quotesData} id={image.id} key={image.id} category={image.category} img={image.img} src={image.src} />
         })

        return(
         <div className="row">
            {card}
          </div>
        )
    }
}

export default CardList