import React, { Component }  from 'react'
    

class Create extends Component{
  
    render() {
        console.log(this.props)
        return(
        <form id='createForm'>
            <h3>Add a quote!</h3>
            <label>
                <input name='quote'  placeholder='Quote' type='text' value={this.props.quote} onChange={this.props.onChange} />
            </label>
            <label>
                <input name='author'  placeholder='Author'  type='text' value={this.props.author} onChange={this.props.onChange} />
            </label>
            <label>
                <input onBlur={this.onBlur} name='category' placeholder='Category (Love, Travel, or Any)'  type='text' value={this.props.category} onChange={this.props.onChange} />
            </label>
            <input type='submit' onClick={this.props.addQuote}/>
        </form>
        )
    }
}

export default Create