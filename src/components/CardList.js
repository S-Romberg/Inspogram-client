import React, { Component }  from 'react'


class CardList extends Component{
    render() {
        var travel = this.props.quotes.filter(quote => quote.category === 'Travel')
        var love = this.props.quotes.filter(quote => quote.category === 'Love')
        var any = this.props.quotes.filter(quote => quote.category === 'Any')
        console.log(love)

        var card = ''

        return(
         <div className="row">
            {card}
          </div>
        )
    }
}

export default CardList