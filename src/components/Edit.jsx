import React, { Component }  from 'react'



class Edit extends Component{
    render() {
        return(
        <form id='editForm' onSubmit={this.props.handleSubmit}>
        <h3>Edit a quote</h3>
            <label>
                <input name='quote' placeholder={this.props.quote} type='text' value={this.props.quote} onChange={this.props.onChange} />
            </label>
            <label>
                <input name='author' placeholder={this.props.author} type='text' value={this.props.author} onChange={this.props.onChange} />
            </label>
            <input type='submit' onClick={this.props.editQuote}/>
            <button onClick={this.props.deleteQuote} >Delete</button>
        </form>
        )
    }
}

export default Edit