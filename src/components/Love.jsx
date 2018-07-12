import React, { Component }  from 'react'
import Card from './Card'


class Love extends Component{
    render() {
        var love = this.props.quotes.filter(quote => quote.category === 'Love')
        var quotesData = love.map( quote => {
            return  <ul key={quote.id} ><li id={quote.id} className='quote' >{quote.quote}</li> <li className='author'>{quote.author}</li> </ul>
         })
         var card = this.props.images.map(image => {
            if(image.category === 'Love'){
           return  <Card renderCard={this.props.renderCard} key={image.id} quotes={quotesData} category={image.category} img={image.img} src={image.src} />
         }
         })

        return(
         <div className="row">
            {card}
          </div>
        )
    }
}

export default Love